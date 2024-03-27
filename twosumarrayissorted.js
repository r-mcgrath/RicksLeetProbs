const twoSum = (numbers, target) => {
    
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            if(numbers[i] + numbers[j] === target){
                return [i + 1, j + 1];
            }
        }
    }

};

let arr1 = [2,7,11,15]; //9
let arr2 = [2,3,4];  //6
let arr3 = [-1,0];  //-1

console.log(twoSum(arr1, 9))
console.log(twoSum(arr2, 6))
console.log(twoSum(arr3, -1))