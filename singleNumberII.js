const singleNumber = (nums) => {
  let sortedNums = nums.sort();
  console.log(sortedNums)
  
  for(let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] === sortedNums[i+1]) {
        i += 2
    } else {
        return sortedNums[i];
    }
  }
};

let nums1 = [2,2,3,2];
let nums2 = [0,1,0,1,0,1,99];

//console.log(singleNumber(nums1));
console.log(singleNumber(nums2));