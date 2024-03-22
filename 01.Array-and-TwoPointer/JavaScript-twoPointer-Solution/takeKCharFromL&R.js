class Solution {
    takeCharacters(s, k) {
        const n = s.length;
        let ans = n;
        let countA = 0, countB = 0, countC = 0;
        
        // Total count of a, b, c.
        for (let i = 0; i < n; i++) {
            if (s[i] === 'a') countA++;
            if (s[i] === 'b') countB++;
            if (s[i] === 'c') countC++;
        }

        // If count of A, B, C is less than K return -1 (means not possible)
        if (countA < k || countB < k || countC < k) return -1;

        let left = 0, right = 0;
        while (right < n) {
            if (s[right] === 'a') countA--;
            if (s[right] === 'b') countB--;
            if (s[right] === 'c') countC--;

            // If count of any char becomes less than required, start taking elements from left
            // i.e., shrinking the window size
            while (countA < k || countB < k || countC < k) {
                if (s[left] === 'a') countA++;
                if (s[left] === 'b') countB++;
                if (s[left] === 'c') countC++;
                left++;
            }

            // Update the ans
            ans = Math.min(ans, n - (right + 1 - left));
            right++;
        }
        return ans;
    }
}
