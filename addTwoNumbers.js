const addTwoNumbers = (l1, l2) => {

let num1 = l1.reverse().join('')
let num2 = l2.reverse().join('')
console.log(num1, num2);

let sum = parseInt(num1) + parseInt(num2)
console.log(sum)
return sum.toString().split('').reverse();




};

let l1 = [2,4,3];
let l2 = [5,6,4];

let l3 = [0];
let l4= [0];

let l5 = [9,9,9,9,9,9,9];
let l6 = [9,9,9,9]

console.log(addTwoNumbers(l1,l2))