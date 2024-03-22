#include <iostream>
using namespace std;

void insertionSort(int arr[], int n) {
    // Space: O(1)
    // Time: O(n^2)
    for (int i = 1; i < n; i++) {
        int element = arr[i];
        int j;
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

int main() {
    int arr[] = {4, 5, -1, 2, -8, 3};
    int n = sizeof(arr) / sizeof(arr[0]);
    insertionSort(arr, n);
    for (int i = 0; i < n; i++) {
        cout << arr[i] << endl;
    }
    return 0;
}
