function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index where target is found
        }
    }
    return -1; // Return -1 if target is not found
}

// Example usage:
const arr = [1, 5, 7, 9, 12, 15, 18];
const target = 12;
const result = linearSearch(arr, target);
if (result !== -1) {
    console.log(`Target ${target} found at index ${result}`);
} else {
    console.log(`Target ${target} not found in the array.`);
}
