function textBillFunction() {
    var total = 0;
    var userString = "";
    var warning = 30;
    var critical = 50;


    function stringTotal(userRecord) {
        userString = userRecord.split(",");
        for (var i = 0; i < userString.length; i++){
            var userValue = userString[i].trim();
            
            if (userValue.toLowerCase() == "call") {
                total += 2.75;
            }
            if (userValue.toLowerCase() == "sms") {
                total += 0.75;
            }

        }
        return total;
    }
    function getTextTotal() {
        return total;
    }
        
    function getwarning(){
        return warning;
    }
    function getcritical(){
        return critical;
    }

    function classname() {
        if (getTextTotal() >= getcritical()) {
            return "critical";
        }
        if (getTextTotal() >= getwarning()) {
            return "warning";
        }
    }
    
    return {
        stringTotal,
        getTextTotal,
        getcritical,
        getwarning,
        classname
    }



}