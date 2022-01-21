//Exercise 6 Count Truthy
const array = [0, 1, 2, 3, 4, 5];
function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}
