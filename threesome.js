const threeSum = (nums) => {
    let output = [];
    nums.sort((a,b) => a-b);
    
    for(let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }
        for(let j = i + 1; j < nums.length; j++){
            if (j > i+1 && nums[j] === nums[j-1]) {
                continue;
            }
            for(let k = j+1; k < nums.length; k++) {
                if (k > j+1 && nums[k] === nums[k-1]) {
                    continue;
                }
                if (nums[i] + nums[j] + nums[k] === 0) {
                    let result = [nums[i], nums[j], nums[k]];
                    output.push(result);
                }
            }
        }
    }
    
    return output;
}
let arr1 = [-1,0,1,2,-1,-4];
let arr2 = [0,1,1];
let arr3 = [0,0,0];

console.log(threeSum(arr1));
