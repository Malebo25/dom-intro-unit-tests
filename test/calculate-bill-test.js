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