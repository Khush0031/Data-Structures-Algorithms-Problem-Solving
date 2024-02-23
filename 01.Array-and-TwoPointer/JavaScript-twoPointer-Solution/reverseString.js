// JavaScript Code

var reverseString = function (s) {
  let n = s.length;
  let i = 0;
  let j = n - 1;
  while (i <= j) {
    // swapping the values
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;

    // move to the next positions
    i++;
    j--;
  }
};
