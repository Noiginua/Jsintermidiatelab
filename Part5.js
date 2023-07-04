// a) The code returns the wrong answer because of the inherent limitations of floating-point arithmetic in Java script

// b) Create a function currencyAddition(float1, float2) which safely adds the two
//    decimal numbers float1 and float2 and returns the correct float result.

function currencyAddition(float1, float2) {
    const result = (float1 * 100 + float2 * 100) / 100;
    return result;
  }

  
  //c) Create a function currencyOperation(float1, float2, operation) which
  //safely performs the given operation (either +, -, / or *) on the two numbers and returns
  //the correct float result.

  function currencyOperation(float1, float2, operation) {
    let result;
  
    switch (operation) {
      case '+':
        result = currencyAddition(float1, float2);
        break;
      case '-':
        result = currencyAddition(float1, -float2);
        break;
      case '/':
        result = currencyAddition(float1, 1 / float2);
        break;
      case '*':
        result = currencyAddition(float1, float1 * float2);
        break;
      default:
        throw new Error("Invalid operation");
    }
  
    return result;
  }
//d) To extend the currencyOperation function to support different amounts of decimal places, we can add a fourth argument called numDecimals.
function currencyOperation(float1, float2, operation, numDecimals) {
    let result;
  
    switch (operation) {
      case '+':
        result = currencyAddition(float1, float2);
        break;
      case '-':
        result = currencyAddition(float1, -float2);
        break;
      case '/':
        result = currencyAddition(float1, 1 / float2);
        break;
      case '*':
        result = currencyAddition(float1, float1 * float2);
        break;
      default:
        throw new Error("Invalid operation");
    }
  
    if (numDecimals) {
      const factor = Math.pow(10, numDecimals);
      result = Math.round(result * factor) / factor;
    }
  
    return result;
  }
  console.log(0.3 === currencyAddition(0.1, 0.2)); // true
  console.log(0.3 === currencyOperation(0.1, 0.2, '+')) // true