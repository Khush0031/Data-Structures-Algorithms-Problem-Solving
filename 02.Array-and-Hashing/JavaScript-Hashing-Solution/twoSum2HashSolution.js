var twoSum = function(nums, target) {
    const hashTable = {};
    for(let i=0; i<nums.length; i++){
        if(hashTable[target - nums[i]] != undefined){
            return [hashTable[target - nums[i]]+1,i+1];
        }
        hashTable[nums[i]] = i;
    }
 };