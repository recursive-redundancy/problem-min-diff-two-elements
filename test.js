/**
 * Unit testing script
 */

const minDiff = require('./min-diff');

/**
 * set of arrays to test
 */
let tests = [
  {
    arr: [1, 5, 3, 19, 18, 25],
    soln: 1
  },
  {
    arr: [30, 5, 20, 9],
    soln: 4
  },
  {
    arr: [1, 19, -4, 31, 38, 25, 100],
    soln: 5
  },
  {
    arr: [],
    soln: 0
  }
];

/** run solnLinearTime on each test array */
tests.forEach((test) => {
  console.log('running test on: ' + test.arr);
  let result = minDiff(test.arr);
  console.log('expected=' + test.soln);
  console.log('result=' + result);
  if (test.soln == result) {
    console.log('***SUCCESS***');
  }
  else {
    console.log('***FAILURE***');
  }
  console.log('-----------------')
})