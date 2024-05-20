const intToRoman = (num) => {
    let symbolCache = {
        'I' : 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
      };
    
   numArray = num.toString().split('').reverse()
       let answer = "";


  for (let i = 0; i < numArray.length; i++) {
    let temp = numArray[i] * 10^i;
    while (temp > 0) {
        
    }
    
    
  }



   
   return numArray;
}

let num1 = 3749;
let num2 = 58;
let num3 = 1994;

console.log(intToRoman(num1))