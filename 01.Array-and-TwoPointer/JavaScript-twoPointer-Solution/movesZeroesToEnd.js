var moveZeroes = function(nums) {
    let n = nums.length;
    let i=0;
    let j=0;
    while(j<n){
        if(nums[j] !=0){
            nums[i] = nums[j];
            i++;
        }
        j++;
    }
     for(let k=i;k<n;k++){
            nums[k]=0;
    }
};