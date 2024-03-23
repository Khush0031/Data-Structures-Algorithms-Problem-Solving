function partition(arr, s, e) {
    const pivot = arr[s];
    let count = 0;
    for (let i = s + 1; i <= e; i++) {
        if (arr[i] <= pivot) {
            count++;
        }
    }

    const pivotIndex = s + count;
    [arr[s], arr[pivotIndex]] = [arr[pivotIndex], arr[s]];

    let i = s, j = e;
    while (i <= pivotIndex && j >= pivotIndex) {
        while (arr[i] <= pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i < pivotIndex && j > pivotIndex) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }

    return pivotIndex;
}

function quickSort(arr, s, e) {
    // Base case
    if (s >= e) {
        return;
    }

    // Partition
    const p = partition(arr, s, e);

    // Left recursive call
    quickSort(arr, s, p - 1);
    // Right recursive call
    quickSort(arr, p + 1, e);
}

function main() {
    const arr = [4, 2, 7, 1, 3, 9, 5];
    quickSort(arr, 0, arr.length - 1);
    console.log(arr.join(" "));
}

main();
