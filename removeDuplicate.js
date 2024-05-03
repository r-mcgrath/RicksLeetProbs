const removeDuplicates = (nums) => {
  let newSet = [...new Set(nums)]
  console.log(newSet)
  nums = newSet
  let k = newSet.length;
  return k
}

let nums1 = [1,1,2];
let nums2 = [0,0,1,1,1,2,2,3,3,4];

console.log(removeDuplicates(nums1));
console.log(removeDuplicates(nums2));