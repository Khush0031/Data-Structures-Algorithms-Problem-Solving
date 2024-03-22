function insertionSort(arr) {
    // Space: O(1)
    // Time: O(n^2)
    for (let i = 1; i < arr.length; i++) {
        let element = arr[i];
        let j;
        for (j = i - 1; j >= 0; j--) {
            if (arr[j] > element) {
                arr[j + 1] = arr[j];
            } else {
                // arr[j] <= element
                break;
            }
        }
        arr[j + 1] = element;
    }
}

function main() {
    let arr = [4, 5, -1, 2, -8, 3];
    insertionSort(arr);
    arr.forEach(element => {
        console.log(element);
    });
}

main();
