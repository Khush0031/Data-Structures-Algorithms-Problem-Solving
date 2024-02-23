var sortedSquares = function(nums) {
    let n = nums.length;
    let ans__arr= Array(n);
    let left = 0;
    let right=n-1;
    for(let i=n-1 ;i>=0;i--){
        if(nums[left]**2<nums[right]**2){
            ans__arr[i]= nums[right]**2;
            right--;
        }else {
            ans__arr[i]=nums[left]**2;
            left++;
        }
    }
    return ans__arr;
};