const longestConsecutive = (nums) => {
    let sorted = nums.sort((a, b) => a - b).reverse();
    let counter = 0;
    let temp = 0;

    console.log(sorted)

    for(let i = 0; i < sorted.length; i++) {
        
        if (sorted[i] - sorted[i+1] === 1) {
            temp++;
            console.log(temp)
            if (temp > counter) {
                counter = temp;
            }
        } else {
            temp = 0;
        }

    }
  
    counter++
    return counter;

};

let nums1 = [100,4,200,1,3,2];
let nums2 = [0,3,7,2,5,8,4,6,0,1];

console.log(longestConsecutive(nums1))
console.log(longestConsecutive(nums2))



