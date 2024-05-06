const singleNumber = (nums) => {
let cache = {};
for(let i = 0; i < nums.length; i++) {
    if (!cache[nums[i]]) {
        cache[nums[i]] = 1;
    } else {
        cache[nums[i]]++;
    }
}
return Object.keys(cache).find(key =>
    cache[key] === 1);
};

let nums1 = [2,2,1];
let nums2 = [4,1,2,1,2];
let nums3 = [1];

console.log(singleNumber(nums1));
console.log(singleNumber(nums2));
console.log(singleNumber(nums3));