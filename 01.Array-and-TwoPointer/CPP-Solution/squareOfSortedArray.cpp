#include <vector>
using namespace std;

class Solution {
public:
    vector<int> sortedSquares(vector<int>& nums) {
        int n = nums.size();
        vector<int> ans(n);  // Initialize ans with the correct size
        int left = 0;
        int right = n - 1;

        for (int i = n - 1; i >= 0; i--) {
            if (nums[left] * nums[left] < nums[right] * nums[right]) {
                ans[i] = nums[right] * nums[right];
                right--;
            } else {
                ans[i] = nums[left] * nums[left];
                left++;
            }
        }
        return ans;
    }
};