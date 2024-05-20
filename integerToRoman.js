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
    
   numArray = num.toString().split('')
       let answer = [];


  for (let i = 0; i < numArray.length; i++) {
    
    let length = numArray.length + 1
    let power = length - i;
    let temp = numArray[i] * 10^power;
    if (temp === 0) {
        i++
    }
    
    while(temp > 0)  
        if (temp >= 1000) {
            temp -= 1000;
            answer.push('M');
        } else if (temp >= 500) {
            temp -= 500;
            answer.push('D');
        } else if (temp >=100) {
            temp -= 100;
            answer.push('C');
        } else if (temp >= 50) {
            temp -= 50;
            answer.push('L');
        } else if (temp >= 10) {
            temp -= 10;
            answer.push('X');
        } else if (temp > 0) {
            temp -= 1;
            answer.push('I');
        }
        
        console.log(answer)
    }
    
    
  



   
   return answer.reverse().join('');
}

let num1 = 3749;
let num2 = 58;
let num3 = 1994;
let num4 = 1;

console.log(intToRoman(num4))