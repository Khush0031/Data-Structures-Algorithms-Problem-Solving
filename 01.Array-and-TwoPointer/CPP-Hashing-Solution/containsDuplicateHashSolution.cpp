#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        unordered_map<int,int> counts;

        // Count occurrences of each number
        for(int x: nums) {
            counts[x]++;
        }

        // Check if any number occurs more than once
        for(auto x: counts) {
            if(x.second >= 2) return true; //  condition to check duplicates
        }
        return false; // Return false if no duplicates found
    }
};