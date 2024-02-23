#include<bits/stdc++.h>

using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> numMap;
        int n = nums.size();

        for (int i = 0; i < n; i++) {
            int b = target - nums[i];
            if (numMap.count(b)) {
                return {numMap[b], i};
            }
            numMap[nums[i]] = i;
        }

        return {}; 
    }
};