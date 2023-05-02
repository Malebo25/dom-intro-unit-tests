describe("RADIO BILL TESTS", function (){
    it("should be  able to return the correct call total, sms total and overall total for for 3 calls and 3 sms", function () {
        let radioBill = RadioBillFunction();
        
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();

        radioBill.sendingSms();
        radioBill.sendingSms();
        radioBill.sendingSms();
       
        assert.equal(10.5, radioBill.getTotal());
        assert.equal(8.25, radioBill.getTotalCall());
        assert.equal(2.25,  radioBill.getTotalSms());
        
        
        

    });
    it("should be  able to return the correct call total, sms total and overall total for for 2 calls ", function () {
        let radioBill = RadioBillFunction();
        
        radioBill.makingCall();
        radioBill.makingCall();
        
       
        assert.equal(5.5, radioBill.getTotal());
        assert.equal(5.5, radioBill.getTotalCall());
        assert.equal(0,  radioBill.getTotalSms());
        
        
        

    });

    it("should be  able to return the correct call total, sms total and overall total for for 6 sms'", function () {
        let radioBill = RadioBillFunction();

        radioBill.sendingSms();
        radioBill.sendingSms();
        radioBill.sendingSms();
        radioBill.sendingSms();
        radioBill.sendingSms();
        radioBill.sendingSms();
        
       
        assert.equal(4.5, radioBill.getTotal());
        assert.equal(0, radioBill.getTotalCall());
        assert.equal(4.5,  radioBill.getTotalSms());
        
        
        

    });


});

describe(" Radio bill warning and critical levels", function (){
    it("it should return a class name of warning if warning level of 30 is reached  ", function () {
        let radioBill = RadioBillFunction();
       

       
        radioBill.getWarning();

        radioBill.getCritical();

        
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.sendingSms();
        radioBill.sendingSms();
        radioBill.sendingSms();


        
        assert.equal(35.25, radioBill.getTotal());
        assert.equal("warning", radioBill.ClassName());
        
    });

    it("it should return a class name of critical if critical level of 50 is reached  ", function () {
        let radioBill = RadioBillFunction();
       

       
        radioBill.getWarning();

        radioBill.getCritical();

        
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.sendingSms();
        radioBill.sendingSms();
        radioBill.sendingSms();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall()


        
        assert.equal(65.5, radioBill.getTotal());
        assert.equal("critical", radioBill.ClassName());
        
    });

    it("it should return a class name of critical if critical level of 50 is reached  ", function () {
        let radioBill = RadioBillFunction();
       

       
        radioBill.getWarning();

        radioBill.getCritical();

        
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.sendingSms();
        radioBill.sendingSms();
        radioBill.sendingSms();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall();
        radioBill.makingCall()
        radioBill.sendingSms();
        radioBill.sendingSms();
        radioBill.sendingSms()
        radioBill.sendingSms();
        radioBill.sendingSms();
        radioBill.sendingSms()


        
        assert.equal(70, radioBill.getTotal());
        assert.equal("critical", radioBill.ClassName());
        
    });
});
