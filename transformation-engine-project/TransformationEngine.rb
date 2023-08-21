=begin
READ ME

Ver 1.3 23/10/19
The structure has been changed alot. Some additional functions such as detectOperations(), instantiateOperators(),
getInputValues(), getParameters() has been added to make the code less messy. Those functions reduce the complexity
of the engine. Also now the operators are stored in a hash and generated as definition needed. In the mean time, some
old functions like swap() have been removed.

The operator classes also been changed based on those modifications. Now they take an array and a parameter hash as 
arguments.

The external package Jsonpath is used in this version to reduce the complexity. You might need to install it before
running.

Please check it out.

Ver 1.2 15/10/19
This version is based on the code that Nicole has provided along with hardcoded.json
The basic structure has been changed a lot. Especially, the func transformation() and func detectContentIndex()
hardcoded.json also has been changed. Attributes "swap_with_column", "id", "status" have been added to 
column "state" and "postcode" for swaping columns and the attribute "type" has also been changed to "swap".

Ver 1.1 10/10/19
The spirit of this version is that to make the engine as less 'hard-coded' as possible. And yet it isn`t perfect since
we can just assume that the contents (especially the header) of input file would be the same as the sample that has
been provided which means the input must contains the columns of id, person-id, name etc. The sequence of those columns
don`t matter since func detecContentIndex will be responsible of it.

Also a testing func has been added!


=end

require 'csv'
require 'json'
require 'pp'

# require_relative '../Engine/jsonpath/lib/jsonpath.rb'
require_relative './Operators/StringSplit.rb'
require_relative './Operators/StringReplace.rb'
require_relative './Operators/Copy.rb'
require_relative './Operators/StringConcatenation.rb'
require_relative './engineTests.rb'

#returns a hash with operation names as keys and operator instances as the value
def instantiateOperators()

    outputHash = {}

    outputHash["copy"] = Copy.new()

    outputHash["concat"] = StringConcatenation.new()

    outputHash["split"] = StringSplit.new()

    outputHash["replace"] = StringReplace.new()

    return outputHash
end

#takes the definition Json and current operation that needs to be performed and current row in csv file as input
#returns an array that contains the value of input columns as the input for future operations
def getInputValues(json_spec, currentOperation, row)

    inputColumns = []

    inputColumns = json_spec["input_columns"].dup
    inputValues = []
    for item in inputColumns 

        inputValues.push(row[item])
    end

    inputValues.delete(nil)
    return inputValues

end

#copy the current operation parameters and put them in a hash
#returns the parameter hash for operators
def getParameters(currentOperation)

    outputHash = currentOperation.dup

    return outputHash
end

#transform the header of input file by definition
#takes a Json parse as input and returns a string of the header for output file
def transformHeader(description)

    outputStr = ""
    tempArr = []
    tempStr = ""
    index = 0

    #loop every values in hash and put the values with key "output_name" into a string.
    #So that we would have the header of output
    for e in description["output"]

        #Appends not nil properties
        if e["output_name"] != nil

            tempArr.push(e["output_name"])

        end
    end

    for item in tempArr
    
        #Combine those properties in to a string
        if index != tempArr.size - 1

            tempStr = tempStr + item + ","

        #Don`t put a comma after the last item
        else

            tempStr = tempStr + item

        end

        index += 1
    end

    outputStr = tempStr

    return outputStr

end

#Takes the CSV data as input and returns a hash map
#Find the index of target column and store the name of that column as the key and index as the value into that hash map
#This function is for automatic detect contents regardless the sequence
def detectContentIndex(data)

    i = 0
    output_array = []

    data.each do |element|
        contents = {}
        while i < element.size
            
            contents[data[0][i]] = element[i]

            i += 1
        end
        
        output_array.push(contents)
        i = 0
    end

    output_array.shift()
    return output_array
end

#Flat a multi-dimensional array into a 1st dimensional one
#This function is for testing
def arrayFlat(someArray)
    
    outputArray = []
    aString = ""
    for e in someArray
        
        index = 0

        #Pull out the non-nil items inside the array and put them into a string
        while index < e.size
            
            if index != e.size - 1 && e[index] != nil
                
                aString = aString + e[index] + ", "

            elsif index == e.size - 1 && e[index] != nil

                aString = aString + e[index]
            end

            index = index + 1
        end

        outputArray.push(aString)
        aString = ""
    end

    return outputArray
end

#The testing program, simply compare the length and contents of two arrays
def test(data_1, data_2)

    length = 0

    index = 0

    passed = 0
    #Make them in to 1st dimensional arrays
    arrayFlat(data_1)
    arrayFlat(data_2)

    length = data_1.size

    #Compare the length then the contents
    if data_1.size == data_2.size

        while index < length
            
            if data_1[index] == data_2[index]

                puts("Line #{index} has passed the test...")
                passed += 1
            #Exceptions
            else 
                puts("Line #{index} couldn`t pass the test...")
                puts("data_1[#{index}] #{data_1[index]}")
                puts("data_2[#{index}] #{data_2[index]}")
            end
        
            index += 1
        end

    #Exceptions
    else
        puts("Warning, the sizes of two files are not the same")
        
        puts("data_1 size #{data_1.size}")
        puts("data_2 size #{data_2.size}")
    end

    puts("#{passed}/#{length} lines have passed the test")

end

#Transformation function, takes the definition Json data and the hash map that stores columns index of CSV as input
#return an array that contains the rows of the output file
def transformation(json_data, csv_data)

    #Operators initiating
    operatorsHash = {}
    
    operatorsHash = instantiateOperators()

    #The String that is going to be appended to the output_array
    outVal = ""

    #The array that is going to be returned
    output_array = []

    #The array that used for operators operation
    # opeartionArray = []

    #The header of output file
    output_header = transformHeader(json_data)
    output_header = output_header.split(",")
    output_array.push(output_header)

    index = 1

    #for each row in csv hash map
    for row in csv_data

        #The array represents a row in output
        currentRow = []

        # #A hash that stores IDs and status to check if two elements already swaped
        # swapHash = {}

        #Loop the definition
        json_data["output"].each do |item|

            #current operation that needs to be perform
            currentOperation = item["operation"]

            #parameters
            paraHash = getParameters(currentOperation)
            
            #input column values
            inputValues = getInputValues(item, currentOperation, row)

            #operator needed for the action
            operator = operatorsHash[currentOperation["type"]]
            
            #result
            outVal = operator.operation(inputValues, paraHash)

            currentRow.push(outVal)

        end
        
        output_array.push(currentRow)
        index += 1
    end

    puts("output_array: #{output_array}")
    return output_array
end

def writeToFile(output)
    CSV.open("output_result.csv", "wb", row_sep: "\r\n") do |csv|
    
        output.each do |row|

            csv << row

        end

    end
end

def runTransformation(desc, input)
    #Started time
    time1 = Time.new()
    puts("Transformation starts at: #{time1}")

    # set files and parse/read where needed
    description = JSON.parse(File.read(desc))
    input_data = CSV.read(input)

    output = []
    hashArray = detectContentIndex(input_data)

    # actually run the transform
    output = transformation(description, hashArray)


    # Write the output to the file
    writeToFile(output)

    time2 = Time.new()
    puts("Transformation ends at: #{time2}")

    # return for testing
    return output
end

# change to true to enable the testing
runTests = false

if runTests
    testing = EngineTests.new()
    testing.runTests()
else
    transformationDescription = './examplejson.json'
    inputData = './person_address_input_testing.csv'

    runTransformation(transformationDescription, inputData)
end
