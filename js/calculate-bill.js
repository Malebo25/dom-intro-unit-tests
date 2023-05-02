function calculateBillFunction() {
  var overallTotal = 0;
  var userValue = "";
  var Warning = 30;
  var Critical= 50;


  function Totalvalue(userInput) {
    userValue = userInput;
    if (userValue.toLowerCase() == "call") {
      overallTotal += 2.75;
    }
    if (userValue.toLowerCase() == "sms") {
      overallTotal += 0.75;
    }
  }
  function getOverallTotal() {
    return overallTotal
  }

  function getwarningLevel(){
    return Warning;
  }
  function getcriticalLevel(){
    return Critical;
  }

  function className() {
        if (getOverallTotal() >= getcriticalLevel()) {
            return "critical";
        }
        if (getOverallTotal() >= getwarningLevel()) {
            return "warning";
        }
  }

  
  
  return {
    Totalvalue,
    getOverallTotal,
    getwarningLevel,
    getcriticalLevel,
    className,
  }


}