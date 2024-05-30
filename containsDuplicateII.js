//Given an integer array nums and an integer k, return true if there are two distinct indices i and j 
//in the array such that nums[i] == nums[j] and abs(i - j) <= k.



const containsNearbyDuplicate = (nums, k) =>{
  let isTrue = false;


  for(let i = 0; i<nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
        if (nums[i] == nums[j] && Math.abs(i - j) <= k) {
            isTrue = true;
            return isTrue;
        } else if (nums[i] == nums[j] && Math.abs(i-j) > k) {
            isTrue = false;
        }
    }
  }
  return isTrue;
}


let nums1 = [1,2,3,1];
let k1 = 3;
//expected:true

let nums2 = [1,0,1,1];
let k2 = 1;
//expected:true

let nums3 = [1,2,3,1,2,3];
let k3 = 2
//expected:false
let nums4 = [0,1,2,3,4,0,0,7,8,9,10,11,12,0];
let k4 = 1
//expected:true

console.log(containsNearbyDuplicate(nums1, k1));
console.log(containsNearbyDuplicate(nums2, k2));
console.log(containsNearbyDuplicate(nums3, k3));
console.log(containsNearbyDuplicate(nums4, k4));