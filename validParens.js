const isValid = (s) => {
  let sArr = s.split('');
  let stack = [];
  let cache = {
    '(': ')',
    '[': ']',
    '{':'}'
  }
  
  //console.log(sArr)
    
  for (let char of sArr) {
    if (cache[char]) { 
        stack.push(char); 
      } else if (char === ')' || char === ']' || char === '}') { 
        if (cache[stack.pop()] !== char) { 
          return false; 
        }
      }
    }
    return stack.length === 0; 
  };
  





let s1 = "()";
let s2 = "()[]{}";
let s3 = "(]";

console.log(isValid(s1))
console.log(isValid(s2))
console.log(isValid(s3))