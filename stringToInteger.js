const myAtoi = (s) => {

  let sArr = s.split("")
  console.log(sArr)

  let reducedArr = [];
  let forbiddenSymbols = [" ", "+", 0 ]
  let regex = /^[a-zA-Z]+$/;
  console.log(regex)

  for(let i = 0; i < sArr.length; i++) {
    
    if (regex.test(sArr[i])=== true) {
        break;
    }
    if(forbiddenSymbols.includes(sArr[i])) {
        i++;
    }
    
    reducedArr.push(sArr[i])
    console.log(reducedArr)
  }
  if (reducedArr.length === 0) {
    return 0;
  }  else {
  return parseInt(reducedArr.join(""));
  }
};

let s1 = "42";
let s2 = " -042";
let s3 = "1337c0d3";
let s4 = "0-1";
let s5 = "words and 987";
console.log(myAtoi(s1))
console.log(myAtoi(s2))
 console.log(myAtoi(s3))
console.log(myAtoi(s4))
console.log(myAtoi(s5))