const lengthOfLongestSubstring = (s) => {

  let counter = 1;
  
  
  if (s.length === 0) return 0;

  for (let i = 0; i < s.length; i++) {
    let tempCounter = 1;
    for (let j = i+1; j<s.length; j++) {
        if (s[i] === s[j]) {
            if (tempCounter > counter) {
                counter = tempCounter;
            }
        tempCounter = 1;
        break;
        } else {
            tempCounter++
        }
    }
  }
  return counter;
}


let s1 = "abcabcbb";
let s2 = "bbbbb"
let s3 = "pwwkew";

console.log(lengthOfLongestSubstring(s1));
console.log(lengthOfLongestSubstring(s2));
console.log(lengthOfLongestSubstring(s3));