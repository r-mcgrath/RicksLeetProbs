const isMatch = (s, p) => {

  let sArr = s.split("")
  let pArr = p.split("")
  let newArr = [];
  console.log(sArr)
  console.log(pArr)

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === pArr[i]) {
        newArr.push(sArr[i]);
    } 
    if (pArr[i] === "*" && newArr[i-1] === sArr[i] || pArr[i-1] === ".") {
        newArr.push(sArr[i]);
    }
    if (pArr[i] === ".") {
        newArr.push(sArr[i]);
    }
  }

  
   let newString = newArr.join("");

   if (s === newString) {
    return true;
   } else {
    return false
   }
}

let s1 = "aa";
let p1 = "a";

let s2 = "aa";
let p2 = "a*";

let s3 = "ab";
let p3 = ".*"

// console.log(isMatch(s1, p1))
// console.log(isMatch(s2, p2))
console.log(isMatch(s3, p3))