const searchInsert = (nums, target) => {

    for (let i = 0; i<nums.length; i++) {
        if (nums[i] === target) {
            return i;
        } else if (nums[i] > target) {
            return i;
        } else if (target > nums[i] && i === nums.length - 1) {
            return i + 1;
        }

    }

}

let nums1 = [1,3,5,6]


let t1 = 5
let t2 = 2
let t3 = 7

console.log(searchInsert(nums1,t1));
console.log(searchInsert(nums1,t2));
console.log(searchInsert(nums1,t3));