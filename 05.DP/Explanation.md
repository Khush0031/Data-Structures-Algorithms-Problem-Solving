# Dynamic Programming (DP).

Dynamic Programming (DP) is a technique used to solve problems by breaking them down into smaller subproblems and solving each subproblem only once, storing their solutions to avoid redundant computation.  

There are two main approaches in dynamic programming: tabulation (also known as bottom-up) and memoization (also known as top-down). 

Let's discuss both approaches with an example problem.

`**Example Problem:**` Fibonacci Sequence.  

The `Fibonacci sequence` is a series of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1. 

Here's how the Fibonacci sequence looks like: 0, 1, 1, 2, 3, 5, 8, 13, 21,......  

`1. Tabulation (Bottom-Up) Approach:`  

In tabulation, we solve the problem by filling up a table (usually an array) iteratively from the smallest subproblem to the target problem.  

```CPP

int fibonacci(int n) {
    vector<int> dp(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

Explanation:

1. We initialize a table dp of size n + 1 to store the Fibonacci numbers.
2. We start filling up the table from the base cases dp[0] = 0 and dp[1] = 1.
3. Then, we iterate from 2 to n, and for each i, we compute dp[i] as the sum of dp[i - 1] and dp[i - 2].
4. Finally, we return dp[n], which is the nth Fibonacci number.  


```

`2. Memoization (Top-Down) Approach:`  

In memoization, we solve the problem recursively, but we store the solutions of already solved subproblems in a memoization table to avoid redundant computations.  

```CPP
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

Explanation:

1. We define a recursive function fibonacci that takes n as input along with a memoization table memo.
2. If n is less than or equal to 1, we return n (base case).
3. If the result for n is already computed and stored in memo, we return it directly.
4. Otherwise, we recursively compute fibonacci(n - 1) and fibonacci(n - 2) and store the result in memo.
5. We return memo[n], which is the nth Fibonacci number.

```  


`Note`

**Both approaches have their advantages:**

Tabulation typically uses less memory since it only requires space for the table, but it may require more time for computation as it computes all subproblems.


Memoization avoids redundant computations by storing solutions of subproblems, which can lead to faster execution, especially when the same subproblems are encountered multiple times during the computation. 


In general, both approaches are used depending on the problem requirements and constraints.