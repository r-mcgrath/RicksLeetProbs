const removeDuplicates = (nums) => {
    for(let i=0;i<nums.length;){
        if(nums[i] ===nums[i+1]){
            nums.splice(i,1)
        }else{
            i++
        }
    }
    return nums.length
   };


let nums1 = [1,1,2];
let nums2 = [0,0,1,1,1,2,2,3,3,4];

console.log(removeDuplicates(nums1));
console.log(removeDuplicates(nums2));