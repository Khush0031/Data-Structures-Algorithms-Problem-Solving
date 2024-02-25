
var multiply = function(num1, num2) {
    if (num1 === "0" || num2 === "0") {
      return "0";
    }

    let n = num1.length,m = num2.length;
    let ans = Array(n + m).fill(0);

    for (let i = n - 1; i >= 0; i--) {
      for (let j = m - 1; j >= 0; j--) {
        let num = (num1[i] - '0') * (num2[j] - '0') + ans[i + j + 1];
        ans[i + j + 1] = num % 10;
        ans[i + j] += Math.floor(num / 10);
      }
    }

    // Remove leading zeros from the result array
    while (ans[0] === 0) {
      ans.shift();
    }

    // Convert array of numbers back into a string
    return ans.join('');
}