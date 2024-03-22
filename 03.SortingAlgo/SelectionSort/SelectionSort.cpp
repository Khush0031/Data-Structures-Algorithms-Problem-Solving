#include <iostream>
#include <vector>
using namespace std;

void selectionSort(vector<int>& arr) {
     // Space: O(1)
    // Time: O(n^2) - θ(n^2) - Ω(n^2)
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        int min_idx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        if (min_idx != i) {
            swap(arr[min_idx], arr[i]);
        }
    }
}

int main() {
    vector<int> arr = {1, 3, 2, 5, 1, 2, 4};
    selectionSort(arr);
    for (int i = 0; i < arr.size(); i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    return 0;
}
