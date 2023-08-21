require_relative './Testing/asserts.rb'

class EngineTests

    $testing = ""
    def runTests()

        $testing = Asserts.new()

        jsonFileOneName = './Testing/JSON/peopleDataOne.json'
        jsonFileTwoName = './Testing/JSON/peopleDataTwo.json'
        jsonFileThreeName = './Testing/JSON/salesDataOne.json'
        jsonFileFourName = './Testing/JSON/salesDataTwo.json'

        csvFileOneName = './Testing/CSV/peopleDataOne.csv'
        csvFileTwoName = './Testing/CSV/salesDataOne.csv'
        csvFileThreeName = './Testing/CSV/salesDataTwo.csv'

        peopleToPeopleTestOne(jsonFileOneName, csvFileOneName)
        # peopleToSalesTestOne(jsonFileOneName, csvFileTwoName)
        peopleToPeopleTestTwo(jsonFileTwoName, csvFileOneName)
        # saleToPeopleTestOne(jsonFileThreeName, csvFileOneName)
        saleToSaleTestOne(jsonFileThreeName, csvFileTwoName)
        # saleToSaleTestTwo(jsonFileFourName, csvFileTwoName)
        saleToSaleTestThree(jsonFileFourName, csvFileThreeName)
    end

    # pass
    def peopleToPeopleTestOne(transformationFile, data)
        puts "TESTING peopleToPeopleTestOne().."

        output = runTransformation(transformationFile, data)
        # TODO: convert ptp1.csv into string and compare
        expectedOutput = ""

        $testing.assertNotNil(output, "Transformation output is a nil object!")
        $testing.assertEquals(output, expectedOutput, "The actual transformation output did not meet the expected output")
        puts "FINISHED TESTING peopleToPeopleTestOne().."
    end

    # fail
    def peopleToSalesTestOne(transformationFile, data)
        puts "TESTING peopleToSalesTestOne().."

        output = runTransformation(transformationFile, data)

        $testing.assertNotNil(output, "Transformation output is a nil object!")
        $testing.assertFail(output, "This transformation succeeded. That was not expected..")
        puts "FINISHED TESTING peopleToSalesTestOne().."
    end

    # pass
    def peopleToPeopleTestTwo(transformationFile, data)
        puts "TESTING peopleToPeopleTestTwo().."

        output = runTransformation(transformationFile, data)
        # TODO: convert ptp2.csv into string and compare
        expectedOutput = ""

        $testing.assertNotNil(output, "Transformation output is a nil object!")
        $testing.assertEquals(output, expectedOutput, "The actual transformation output did not meet the expected output")
        puts "FINISHED TESTING peopleToPeopleTestTwo().."
    end

    # fail
    def saleToPeopleTestOne(transformationFile, data)
        puts "TESTING saleToPeopleTestOne().."

        output = runTransformation(transformationFile, data)

        $testing.assertNotNil(output, "Transformation output is a nil object!")
        $testing.assertFail(output, "This transformation succeeded. That was not expected..")
        puts "FINISHED TESTING saleToPeopleTestOne().."
    end

    # pass
    def saleToSaleTestOne(transformationFile, data)
        puts "TESTING saleToSaleTestOne().."

        output = runTransformation(transformationFile, data)
        # TODO: convert sts1.csv into string and compare
        expectedOutput = ""

        $testing.assertNotNil(output, "Transformation output is a nil object!")
        $testing.assertEquals(output, expectedOutput, "The actual transformation output did not meet the expected output")
        puts "FINISHED TESTING saleToSaleTestOne().."
    end

    # fail
    def saleToSaleTestTwo(transformationFile, data)
        puts "TESTING saleToSaleTestTwo().."

        output = runTransformation(transformationFile, data)

        $testing.assertNotNil(output, "Transformation output is a nil object!")
        $testing.assertFail(output, "This transformation succeeded. That was not expected..")
        puts "FINISHED TESTING saleToSaleTestTwo().."
    end

    # pass
    def saleToSaleTestThree(transformationFile, data)
        puts "TESTING saleToSaleTestThree().."

        output = runTransformation(transformationFile, data)
        # TODO: convert sts3.csv into string and compare
        expectedOutput = ""

        $testing.assertNotNil(output, "Transformation output is a nil object!")
        $testing.assertEquals(output, expectedOutput, "The actual transformation output did not meet the expected output")
        puts "FINISHED TESTING saleToSaleTestThree().."
    end
end