const maxArea = (height) => {
    let currMax = 0

    for(let i = 0; i < height.length; i++) {
        let j = height.length - 1;

        let tempH= Math.min(height[i], height[j]);
        let tempL = j-i;

        if(tempH * tempL > currMax) {
            currMax = tempH * tempL;
        }
    }
    return currMax
 };

 let arr1 = [1,8,6,2,5,4,8,3,7];
 let arr2 = [1,1];

 console.log(maxArea(arr1));
 console.log(maxArea(arr2))
