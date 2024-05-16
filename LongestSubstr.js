// const lengthOfLongestSubstring = (s) => {

//   let counter = 1;
  
  
//   if (s.length === 0) return 0;

//   for (let i = 0; i < s.length; i++) {
//     let tempCounter = 1;
//     for (let j = i+1; j<s.length - 1; j++) {
//         if (s[i] === s[j]) {
//             console.log(tempCounter)
//             console.log(counter)
          
//             if (tempCounter > counter) {
//             counter = tempCounter;
//         }
//         tempCounter = 1;
//         break;
//         } else {
//             tempCounter++
//             if (tempCounter > counter) {
//                 counter = tempCounter;
         
//             }
//         }
       
//     }
//   }
//   return counter;
// }


const lengthOfLongestSubstring = (s) => {
    let maxLength = 0;
    let start = 0;
    let charIndexMap = new Map();

    for (let end = 0; end < s.length; end++) {
        if (charIndexMap.has(s[end])) {
            start = Math.max(charIndexMap.get(s[end]) + 1, start);
        }
        charIndexMap.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
}

let s1 = "abcabcbb";
let s2 = "bbbbb"
let s3 = "pwwkew";
let s4 = "au"

console.log(lengthOfLongestSubstring(s1));
console.log(lengthOfLongestSubstring(s2));
console.log(lengthOfLongestSubstring(s3));
console.log(lengthOfLongestSubstring(s4));