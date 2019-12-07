/**
 * Finds the minimum difference between array elements
 * @param {Array} arr - Array to find from
 * @returns {Number} - An integer value representing minimum difference
 */
function minDiff(arr) {
  if (arr.length == 0) return 0;

  let minDiff = Infinity;
  let diff;
  arr = arr.sort();
  for (let i = 0, end = arr.length - 1; i < end; i++) {
    diff = Math.abs((arr[i+1] - arr[i]));
    if (diff < minDiff) {
      minDiff = diff;
    }
  }
  return minDiff;
}

module.exports = minDiff;