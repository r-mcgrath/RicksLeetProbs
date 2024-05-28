const strStr = (haystack, needle) => {
    if (!needle) return 0;
    for (let i = 0; i < haystack.length; i++) {
        let isMatch = true;
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                isMatch = false;
                break;
            }
        }
        if (isMatch) return i;
    }
    return -1;
};
// let index = -1;
// //convert haystack and needle into iterable arrays
// let haystackArr = haystack.split("")
// console.log(haystackArr)

// let needleArr = needle.split("")
// console.log(needleArr)

// //iterate through array of haystack
// for (let i = 0; i < haystackArr.length; i++) {
//     if (haystackArr[i] === needleArr[0]) {
//         let tempIndex = i;
        
//         for (let j = 0; j < needleArr.length; j++) {
//             console.log(tempIndex)
//             if (haystackArr[i] === needleArr[j]) {
//                 i++
//                 continue
//             } else tempIndex = -1
//             break;
//         }
//     index = tempIndex;
//     }
//     return index;
//}

//if we find needle, return first index of first occurence;if not return -1


// return index
// };

let haystack1 = "sadbutsad";
let needle1 = "sad";

let haystack2 = "leetcode";
let needle2 = "leeto";

let haystack3 = "hello";
let needle3 = "ll"

console.log(strStr(haystack1, needle1));
 console.log(strStr(haystack2, needle2));
 console.log(strStr(haystack3, needle3));