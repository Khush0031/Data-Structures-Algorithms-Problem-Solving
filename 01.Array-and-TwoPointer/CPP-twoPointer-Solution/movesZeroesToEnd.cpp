#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    void moveZeroes(vector<int> &nums)
    {
        int n = nums.size();
        int i = 0;
        int j = 0;
        while (j < n)
        {
            if (nums[j] != 0)
            {
                nums[i] = nums[j];
                i++;
            }
            j++;
        }
        for (int k = i; k < n; k++)
        {
            nums[k] = 0;
        }
    }
};

// Second method.
class Solution
{
public:
    void moveZeroes(vector<int> &nums)
    {
        int n = nums.size();
        int i = 0;
        int j = 0;

        while (j < n)
        {
            if (nums[j] == 0)
            {
                j++;
                continue;
            }
            else
            {
                swap(nums[i], nums[j]);
                i++;
                j++;
            }
        }
    }
};