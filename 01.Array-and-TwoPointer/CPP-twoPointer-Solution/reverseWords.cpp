#include <bits/stdc++.h>

using namespace std;


class Solution {
public:
    string reverseWords(string s) {
        string result;
        string word;
        int length = s.length();
        for (int i = length - 1; i >= 0; i--) {
            if (s[i] != ' ') {
                word = s[i] + word;
            } else if (!word.empty()) {
                if (!result.empty()) {
                    result += " ";
                }
                result += word;
                word = ""; 
            }
        }
        if (!word.empty()) {
            if (!result.empty()) result += " ";
            result += word;
        }

        return result;
    }
};
