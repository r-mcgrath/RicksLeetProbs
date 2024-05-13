// const searchInsert = (nums, target) => {

//     for (let i = 0; i<nums.length; i++) {
//         if (nums[i] === target) {
//             return i;
//         } else if (nums[i] > target) {
//             return i;
//         } else if (target > nums[i] && i === nums.length - 1) {
//             return i + 1;
//         }

//     }

// }


const searchInsert =(nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // If the loop terminates, the target is not found
    // The correct position for insertion is at 'left'
    return left;
}

let nums1 = [1,3,5,6]


let t1 = 5
let t2 = 2
let t3 = 7

console.log(searchInsert(nums1,t1));
console.log(searchInsert(nums1,t2));
console.log(searchInsert(nums1,t3));