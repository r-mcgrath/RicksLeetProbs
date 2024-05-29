const lengthOfLastWord = (s) => {
    let sTrimmed = s.trim()
    console.log(sTrimmed)
    
    let sArr = sTrimmed.split(" ");
    console.log(sArr)



  return sArr[sArr.length - 1].length
};

let s1 = "Hello World";
let s2 = "   fly me   to   the moon  ";
let s3 = "luffy is still joyboy";

console.log(lengthOfLastWord(s1));
console.log(lengthOfLastWord(s2));
console.log(lengthOfLastWord(s3));