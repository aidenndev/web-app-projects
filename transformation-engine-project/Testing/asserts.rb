class Asserts

    $passes = 0
    $fails = 0
    
    def assertNotNil(hashmap, msg)
        if (hashmap != nil)
            $passes = $passes + 1
        else
            fail(msg)
        end
    end

    def assertEquals(actual, expected, msg)
        if (actual == expected)
            $passes += 1
        else
            fail(msg)
        end
    end

    def fail(failMessage)
        puts ("TEST FAILED!!")
        $fails += 1
        puts (failMessage)
    end
end