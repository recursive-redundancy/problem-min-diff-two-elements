# Practice Problem - Minimum difference between array elements
Given an array, find the minimum difference between two elements.

### Example 1
Input  : [1, 5, 3, 19, 18, 25];

Minimum difference is between 18 and 19.

Output : 1

### Example 2
Input  : [30, 5, 20, 9];

Minimum difference is between 5 and 9.

Output : 4

### Example 3
Input  : [1, 19, -4, 31, 38, 25, 100];

Minimum difference is between 1 and -4.

Output : 5

## Solution
Firstly, we sort the array using JavaScript's built-in Array.prototype.sort method.
Then, traverse the array from index 0 to array.length - 2 (because we are 
actually examining both the current index item and its neighbor, so 
we need to stop one index before last element). At each step, we subtract the 
neighboring element from the current element at index i (current iteration index).
If the difference at the step is smaller than the currently stored minDiff value, then
minDiff is updated to that current diff. Finally, we return the minDiff value.

## Time Complexity
* Array.prototype.sort is O(nlogn) linear-log time.
* Traversing array is O(n) linear time.

Therefore time complexity of solution is O(nlogn) linear-log time.

## Testing
A test.js script is included for unit testing. Tests are performed on the above 3 example arrays. Additionally, a test is performed on an empty array, which should return 0. Test is run by 'npm test' command.