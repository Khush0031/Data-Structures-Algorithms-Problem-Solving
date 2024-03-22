function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        let isSwapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Adjacent element swapping
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }
        // If no swapping occurred then array is sorted
        if (!isSwapped) return; // Return from function as array is sorted
    }
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
bubbleSort(arr);
console.log(arr); // Output: [1, 2, 3, 4, 5]
