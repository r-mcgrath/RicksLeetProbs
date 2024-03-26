const isPalindrome = (s) => {
    const chars = s.split("")
    const arr = [];
    let regex = /^[a-zA-Z]+$/;
    
    for (let i = 0; i < chars.length; i++) {
        if (regex.test(chars[i])){
            arr.push(chars[i])
        }
    }
    let checkStr = arr.join("").toLowerCase();
    let revStr = arr.reverse().join("").toLowerCase();
    if(revStr===checkStr){
        return true;
    } else return false;
}

let one = "A man, a plan, a canal: Panama";
let two = "race a car";
let three = " ";

console.log(isPalindrome(one))