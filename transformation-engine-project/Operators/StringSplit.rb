require_relative "Operator.rb"
class StringSplit < Operators

    #split the specific character(s) from the string
    def operation(inputValues, paraHash)

        result = inputValues[0].split(paraHash["delimeter"])

        output_index = paraHash["index"]
        
        return result[output_index]
    end
    
end