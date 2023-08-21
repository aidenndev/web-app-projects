require_relative "Operator.rb"
class StringConcatenation < Operators

    #combine the strings in the array, based on the paraHash
    def operation(inputValues, paraHash)
        #input array for operator
        inputValArray = []
        concatIndex = 0

        #seperator of the strings
        seperator = paraHash["separator"]
        output_str = ""

        #detect nil elements and delete
        for e in inputValues
            if e == nil
                inputValues.delete(e)
            end
        end

        if inputValues.size < 3 && inputValues.size != 1
            
            output_str = inputValues[0] + seperator  + inputValues[1]

            
        elsif inputValues.size == 1

            output_str = inputValues[0]
            
        else
            index = 0

            while index < inputValues.size

                #when it isn`t the last item of the array
                if index != inputValues.size - 1
                    
                    output_str = output_str + inputValues[index] + seperator 

                #shouldn`t add comma to the end of the item
                else
                    
                    output_str = output_str + inputValues[inputValues.size - 1]
                end
                index += 1
            end

        end
    
        return output_str
    end
    
end