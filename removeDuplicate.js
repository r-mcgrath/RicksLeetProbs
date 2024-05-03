const removeDuplicates = (nums) => {
  let k = 1;

  if (nums.length === 0) {
    return 0;
  }
  
  for(let i = 0; i < nums.length-1; i++) {
    if (nums[i] !== nums[i+1] ) {
        k++
    }
  }
  return k;
}

let nums1 = [1,1,2];
let nums2 = [0,0,1,1,1,2,2,3,3,4];

console.log(removeDuplicates(nums1));
console.log(removeDuplicates(nums2));