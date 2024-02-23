
var containsDuplicate = function(nums) {
    const counts = {};
    
    for (let num of nums) {
        if (counts[num]) {
            // If the number already exists in counts, a duplicate is found
            return true;
        }
        counts[num] = 1; // Mark the number as seen
    }
    
    // If no duplicates were found
    return false;
};