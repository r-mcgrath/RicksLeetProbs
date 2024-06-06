const reverse = (x) => {
  let bit =  Math.pow(2,31) - 1   
  let stringX = x.toString().split("").reverse().join("");;
console.log(stringX)
  let result = parseInt(stringX);

  if (result > bit || result < -bit) {
    return 0
  }

  if (x < 0) {
    return -result;
  } else {
    return result
  }


  
};

let x1 = 123;
let x2 = -123;
let x3 = 120;

console.log(reverse(x1));
console.log(reverse(x2));
console.log(reverse(x3));