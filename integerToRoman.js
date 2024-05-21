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
   console.log(numArray)
   
   let answer = [];

  for (let i = 0; i < numArray.length; i++) {
    
    let length = numArray.length - 1
    console.log(length)
    
    let power = length - i;
    console.log(power)
    
    let temp = parseInt(numArray[i]) * 10**power;
    console.log(temp)
    
    if (temp === 0) {
        i++;
    }
    
    while(temp > 0)  {
        if (temp >= 1000) {
            temp -= 1000;
            answer.push('M');
        } else if (temp === 900) {
            temp -=900;
            answer.push('CM');
        } else if (temp >= 500) {
            temp -= 500;
            answer.push('D');
        } else if (temp === 400) {
            temp -= 400;
            answer.push('CD');
        } else if (temp >=100) {
            temp -= 100;
            answer.push('C');
        }  else if (temp === 90) {
            temp -=90;
            answer.push('XC')
        } else if (temp >= 50) {
            temp -= 50;
            answer.push('L');
        } else if (temp === 40) {
            temp -=40;
            answer.push('XL');
        } else if (temp >= 10) {
            temp -= 10;
            answer.push('X');
        }  else if (temp === 9) {
            temp -= 9;
            answer.push('IX')
        } else if (temp >=5) {
            temp -=5;
            answer.push('V')
        }  else if (temp === 4) {
            temp -=4;
            answer.push('IV')
        } else if (temp > 0) {
            temp -= 1;
            answer.push('I');
        }
    }
        
        console.log(answer)
    }
    
    
  



   
   return answer.join('');
}

let num1 = 3749;
let num2 = 58;
let num3 = 1994;
let num4 = 1;

console.log(intToRoman(num1))
// console.log(intToRoman(num2))
// console.log(intToRoman(num3))
// console.log(intToRoman(num4))