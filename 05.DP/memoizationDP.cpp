// Example Problem: Fibonacci Sequence
#include<bits/stdtr1c++.h>
using namespace std;

int fibonacci(int n, vector<int>& memo) {
    if (n <= 1)
        return n;
    if (memo[n] != -1)
        return memo[n];
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}

int fibonacciMemo(int n) {
    vector<int> memo(n + 1, -1);
    return fibonacci(n, memo);
}
