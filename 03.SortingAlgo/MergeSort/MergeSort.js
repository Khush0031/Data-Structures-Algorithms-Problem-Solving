function merge(left, right) {
    let i = 0, j = 0;
    const result = [];

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

function mergeSortHelper(arr, start, end) {
    if (start === end) {
        return [arr[start]];
    }

    const mid = Math.floor((start + end) / 2);
    const left = mergeSortHelper(arr, start, mid);
    const right = mergeSortHelper(arr, mid + 1, end);

    return merge(left, right);
}

function mergeSort(array) {
    return mergeSortHelper(array, 0, array.length - 1);
}

function main() {
    const arr = [-1, 5, -4, -9, 0, 1, 2, -5, -5, 3];
    const sortedArr = mergeSort(arr);
    sortedArr.forEach(element => {
        console.log(element);
    });
}

main();
