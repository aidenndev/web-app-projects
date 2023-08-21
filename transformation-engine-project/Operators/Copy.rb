require_relative "Operator.rb"
class Copy < Operators

    #ouput the clone of the input string
    def operation(inputVal, paraHash)

        output = inputVal[0].dup

        return output

    end

end
