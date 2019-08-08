/**
 * Link: https://www.hackerrank.com/challenges/2d-array
 *
*/

exports.hourglassSum = function(arr) {
  let sums = [];

  for (let x = 0; x < arr.length - 2; x++) {
    for (let y = 0; y < arr.length - 2; y++) {
      sums.push(
        arr[x][y] + arr[x][y+1] + arr[x][y+2] + arr[x+1][y+1] + arr[x+2][y] + arr[x+2][y+1] + arr[x+2][y+2]
      );
    }
  }

  let biggerNumber = sums[0];
  for (let j = 0; j < sums.length; j++) {
    if (sums[j] > biggerNumber) {
      biggerNumber = sums[j];
    }
  }

  return biggerNumber;
};
