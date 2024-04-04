const isPalindrome = (x) => {
    let stringX = x.toString();
    let stringY = stringX.split('').reverse().join('');
    let outcome = false;

    if (stringX === stringY) {
        outcome = true;
    }

    return outcome;
};

let p1 = 121;

console.log(isPalindrome(p1))