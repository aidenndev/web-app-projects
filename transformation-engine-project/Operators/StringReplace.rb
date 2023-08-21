require_relative "Operator.rb"

class StringReplace < Operators

    def operation(inputValues, paraHash)

        replacement = ""
        inputVal = inputValues[0]
        for target in paraHash["replace_values"] do

            if target["original"] == inputVal
            # find value that the original value will be replaced with
                replacement = target["new"]
                break
            end
            
        end

        return replacement
    end

end