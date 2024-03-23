#include <iostream>
#include <vector>
using namespace std;

// Function to perform linear search
int linearSearch(const vector<int>& arr, int target) {
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] == target) {
            return i; // Return the index where target is found
        }
    }
    return -1; // Return -1 if target is not found
}

int main() {
    vector<int> arr = {1, 5, 7, 9, 12, 15, 18};
    int target = 12;
    int result = linearSearch(arr, target);
    if (result != -1) {
        cout << "Target " << target << " found at index " << result << endl;
    } else {
        cout << "Target " << target << " not found in the array." << endl;
    }
    return 0;
}
