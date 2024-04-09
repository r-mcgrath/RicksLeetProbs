const longestCommonPrefix = (strs) => {
  let prefix = strs.reduce((acc, str) => str.length < acc.length ? str : acc);
    
  for (let str of strs) {
    while (str.slice(0, prefix.length) != prefix) {
        prefix = prefix.slice(0, -1);
      }
  }
    return prefix;
};

let strs1 = ["flower","flow","flight"];
let strs2 = ["dog","racecar","car"];

console.log(longestCommonPrefix(strs1));
console.log(longestCommonPrefix(strs2));