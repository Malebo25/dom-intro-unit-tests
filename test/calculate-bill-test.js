describe("Calculate-Bill Tests", function (){
    it("should be  able to return the correct  total for 3 calls and 3 sms", function () {
        let calculateBill = calculateBillFunction();
        
        calculateBill.Totalvalue("sms");
        calculateBill.Totalvalue("sms");
        calculateBill.Totalvalue("sms");

        calculateBill.Totalvalue("CALL");
        calculateBill.Totalvalue("CALL");
        calculateBill.Totalvalue("CALL");
        
       
        assert.equal(10.5, calculateBill.getOverallTotal());
        
        
        

    });

    it("should be  able to return the correct  total for 2 calls", function () {
        let calculateBill = calculateBillFunction();
        

        calculateBill.Totalvalue("CALL");
        calculateBill.Totalvalue("CALL");
        
        
       
        assert.equal(5.5, calculateBill.getOverallTotal());
        
        
        

    });
     it("should be  able to return the correct  total for 2 sms", function () {
        let calculateBill = calculateBillFunction();
        

        calculateBill.Totalvalue("SMS");
        calculateBill.Totalvalue("SMS");
        
        
       
        assert.equal(1.5, calculateBill.getOverallTotal());
        
        
        

     });
    
    it("should be  able to return the correct  total for CaLL,Sms,SMS,call", function () {
        let calculateBill = calculateBillFunction();
        

        calculateBill.Totalvalue("CaLL");
        calculateBill.Totalvalue("Sms");
        calculateBill.Totalvalue("SMS");
        calculateBill.Totalvalue("call");
        
        
        
       
        assert.equal(7, calculateBill.getOverallTotal());
        
        
        

    });


});
 
describe(" calculate bill warning and critical levels", function (){
    it("it should return a class name of warning if warning level of 30 is reached  ", function () {
        let calculateBill = calculateBillFunction();
       

       
        calculateBill.getwarningLevel();

        calculateBill.getcriticalLevel();

        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        // calculateBill.Totalvalue("call");
        // calculateBill.Totalvalue("call");
        // calculateBill.Totalvalue("call");
        // calculateBill.Totalvalue("call");
        // calculateBill.Totalvalue("call");
        // calculateBill.Totalvalue("call");

        
        

        
        assert.equal(33, calculateBill.getOverallTotal());
        assert.equal("warning", calculateBill.className());
        
    });

    it("it should return a class name of critical if warning level of 50 is reached  ", function () {
        let calculateBill = calculateBillFunction();
       

       
        calculateBill.getwarningLevel();

        calculateBill.getcriticalLevel();

        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");


        
        

        
        assert.equal(55, calculateBill.getOverallTotal());
        assert.equal("critical", calculateBill.className());
        
    });

     it("it should return a class name of warning if warning level of 30 is reached  ", function () {
        let calculateBill = calculateBillFunction();
       

       
        calculateBill.getwarningLevel();

        calculateBill.getcriticalLevel();

        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("call");
        calculateBill.Totalvalue("sms");
        calculateBill.Totalvalue("sms");
        calculateBill.Totalvalue("SMS");
        calculateBill.Totalvalue("SMS");
        calculateBill.Totalvalue("SMS");
        calculateBill.Totalvalue("SMS");
        calculateBill.Totalvalue("SMS");
        calculateBill.Totalvalue("SMS");
        calculateBill.Totalvalue("SMS");

        
        

        
        assert.equal(31.5, calculateBill.getOverallTotal());
        assert.equal("warning", calculateBill.className());
        
    });
});
