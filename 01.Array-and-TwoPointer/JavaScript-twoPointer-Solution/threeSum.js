var threeSum = function(nums) {
    nums.sort((a, b) => a - b); // Sort the array to handle two pointers approach
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate elements to avoid duplicate triplets
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1, right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                // Skip duplicates for left and right
                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;
            } else if (sum < 0) {
                left++; // Need a larger sum, move the left pointer
            } else {
                right--; // Need a smaller sum, move the right pointer
            }
        }
    }

    return result;
};
