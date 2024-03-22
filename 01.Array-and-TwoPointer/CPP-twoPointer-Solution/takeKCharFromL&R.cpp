
// below solution work correctly.

#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int takeCharacters(string s, int k) {
        int n = s.size();
        int ans = n;
        int countA=0, countB=0, countC=0;
        //total count of a, b, c.
        for(int i=0; i<n; i++){
            if(s[i]=='a') countA++;
            if(s[i]=='b') countB++;
            if(s[i]=='c') countC++;
        }

        //if count of A,B,C is less than K return -1 (means not possible)
        if(countA<k || countB<k ||countC<k) return -1;


        //left and right repesent char we take from left and right
        int left=0, right=0;
        while(right<n){
            if(s[right] == 'a') countA--;
            if(s[right] == 'b') countB--;
            if(s[right] == 'c') countC--;

            //if count of any char become less than required, strat takingelements from left

            //i.e shriking the window size
            while(countA<k || countB<k || countC<k){
                if(s[left] == 'a') countA++;
                if(s[left] == 'b') countB++;
                if(s[left] == 'c') countC++;
                left++;
            }
            //update the ans
            ans = min(ans,n-(right+1-left));
            right++;
        }
        return ans;
    }
};

