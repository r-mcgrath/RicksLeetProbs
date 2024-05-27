// const divide = (dividend, divisor) => {

//     let answer = 0;
//     let divisorCopy = divisor
//     let counter = 0;
// //iterate to divide without using multiplication, division, or modulous
// while (divisorCopy > 0) {
//     counter++;
//     console.log(counter)
    
//     if (divisor === counter) {
//         answer++;
//         console.log(answer)
        
//         divisorCopy-=1;
//         console.log(divisorCopy)
//         counter = 0;
//     }
//     };

//math.floor or lowest whole number


//determine if answer needs - symbol
//return answer
// return answer
// }

const divide = (dividend, divisor) => {
    let counter = 0;
    let dividendABS = Math.abs(dividend)
    let divisorABS = Math.abs(divisor)
    while (dividendABS >= divisorABS) {
        dividendABS -= divisorABS;
        counter++
    }
    

    if(Math.sign(dividend) + Math.sign(divisor) === 2 || Math.sign(dividend) + Math.sign(divisor) === -2) {
        return counter;
   } else return -(counter);
};



let dividend1 = 10;
let divisor1 = 3;

let dividend2 = 7;
let divisor2= -3;

let dividend3 = -2147836;
let divisor3 = -1;
console.log(divide(dividend1, divisor1));
console.log(divide(dividend2, divisor2));
console.log(divide(dividend3, divisor3));