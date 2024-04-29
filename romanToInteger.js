const romanToInt = (s) => {
  let symbolCache = {
    'I' : 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let total = 0;
  let temp = 0;
  //turn symbol into array to iterate through
  let sArray = s.split('');
  //console.log(sArray)
  for (let i = 0; i < sArray.length; i++) {
    if(symbolCache[sArray[i]] >= symbolCache[sArray[i+1]] || i === sArray.length-1) {
        total += symbolCache[sArray[i]];
    } else {
        temp += symbolCache[sArray[i]];
    }
  }
  return total - temp;
};

let first = "III"
let second = "LVIII"
let third = "MCMXCIV"
console.log(romanToInt(first))
console.log(romanToInt(second))
console.log(romanToInt(third))