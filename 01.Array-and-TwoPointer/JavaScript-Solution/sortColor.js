function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
var sortColors = function(arr) {
    let n = arr.length;
    let left = 0;
    let right = n - 1;
    let i = 0;
    
    while(i <= right) {
        if(arr[i] == 2) {
            swap(arr, i, right);
            right--;
        }
        else if(arr[i] == 0 ) {
            swap(arr, i, left);
            left++;
            i++;
        }
        else {
            i++;
        }
    }
};