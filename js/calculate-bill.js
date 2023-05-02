function calculateBillFunction() {
  var overallTotal = 0;
  var userValue = 0;

  function Totalvalue(userInput) {
    userValue = userInput;
    if (userValue.toLowerCase() == "call") {
      overallTotal += 2.75;
    }
    if (userValue.toLoweCase() == "sms") {
      overallTotal += 0.75;
    }
  }
  function getOverallTotal() {
    return overallTotal
  }
  
  return {
    Totalvalue,
    getOverallTotal,
  }


}