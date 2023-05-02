function RadioBillFunction() {
    var callTotal = 0;
    var smsTotal = 0;
    var Total = 0;
    var WarnLevels = 30;
    var CriticalLevels = 50;

    function makingCall() {
        callTotal += 2.75;
    }
    function sendingSms() {
        smsTotal += 0.75;
    }
    function getTotalCall() {
        return callTotal;
    }
    function getTotalSms() {
        return smsTotal;
    }
    function getTotal() {
        return Total = smsTotal + callTotal;
    }
    function getWarning() {
        return WarnLevels;
    }

     function getCritical() {
        return CriticalLevels;
     }
    
    function ClassName() {
         if (getTotal() >= getCritical()) {
            return "critical";
        }
        if (getTotal() >= getWarning()) {
            return "warning";
        }
    }





    return {
        makingCall,
        sendingSms,
        getTotalCall,
        getTotalSms,
        getTotal,
        getWarning,
        getCritical,
        ClassName,

    }
    


    
}