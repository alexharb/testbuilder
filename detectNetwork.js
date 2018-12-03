// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

function starting(array, number) {
  return array.map(function (each) {
    return each.toString();
  })
  .reduce(function(found, next) {
    return number.startsWith(next) || found
  }, false)
}

var detectNetwork = function(cardNumber) {
  if (cardNumber.length === 14) {
    if (cardNumber.startsWith('38') || cardNumber.startsWith('39'))  {
      return "Diner's Club";
    };
  }  
  if (cardNumber.length === 15) {
    if (cardNumber.startsWith('34') || cardNumber.startsWith('37'))  {
      return "American Express";
    }
  }
  if (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) {
      var array = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];
      if (starting(array, cardNumber)) {
        return "Switch";
      }
    }
  if ((cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) && cardNumber.startsWith('4')) {
      return "Visa";
    }
  if (cardNumber.length === 16) {
    if (cardNumber.startsWith('5') && !cardNumber.startsWith('50')) {
      return "MasterCard";
    }
  }  
  if (cardNumber.length === 19 || cardNumber.length === 16) {
    if(cardNumber.startsWith('6011') || cardNumber.startsWith('64') || cardNumber.startsWith('65')) {
      return "Discover"
    }
  }  
  if ((cardNumber.length > 11) && (cardNumber.length < 20)) {
    if(cardNumber.startsWith('50') || cardNumber.startsWith('6304')) {
      return "Maestro"
    }
  if(cardNumber.length > 15 && cardNumber.length < 20) {
       // var array = (_.range(622126, 622926)) + (_.range(624, 627)) + _.range(6282, 6289);
      var array = Array.apply(null, Array(800)).map(function(each, i) {
        return 622126 + i
      })
      var array2 = Array.apply(null, Array(3)).map(function(each, i) {
        return 624 + i
      })
      var array3 = Array.apply(null, Array(7)).map(function(each, i) {
        return 6282 + i
      });
      array = array.concat(array2, array3);
      if (starting(array, cardNumber)) {
        return "China UnionPay"
      }
    }
  }
  return "default"
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


