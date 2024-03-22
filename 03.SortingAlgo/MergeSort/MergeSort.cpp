#include <iostream>
#include <vector>
using namespace std;

vector<int> merge(vector<int>& left, vector<int>& right) {
    int i = 0, j = 0;
    vector<int> result;
    
    while (i < left.size() && j < right.size()) {
        if (left[i] <= right[j]) {
            result.push_back(left[i]);
            i++;
        } else {
            result.push_back(right[j]);
            j++;
        }
    }
    
    while (i < left.size()) {
        result.push_back(left[i]);
        i++;
    }
    
    while (j < right.size()) {
        result.push_back(right[j]);
        j++;
    }
    
    return result;
}

vector<int> mergeSortHelper(vector<int>& arr, int start, int end) {
    if (start == end) {
        vector<int> result = {arr[start]};
        return result;
    }
    
    int mid = (start + end) / 2;
    vector<int> left = mergeSortHelper(arr, start, mid);
    vector<int> right = mergeSortHelper(arr, mid + 1, end);
    
    return merge(left, right);
}

vector<int> mergeSort(vector<int>& array) {
    return mergeSortHelper(array, 0, array.size() - 1);
}

int main() {
    vector<int> arr = {-1, 5, -4, -9, 0, 1, 2, -5, -5, 3};
    arr = mergeSort(arr);
    for (int i = 0; i < arr.size(); i++) {
        cout << arr[i] << endl;
    }
    return 0;
}
