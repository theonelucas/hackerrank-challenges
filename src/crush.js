/**
 * Optimal solution
 *
 * Reference:
 *  - https://www.youtube.com/watch?v=hDhf04AJIRs
 *  - https://www.youtube.com/watch?v=pVS3yhlzrlQ
 */
exports.crush = function(n, queries) {
  const array = new Array(n+1).fill(0);
  let max = -Infinity;

  for (let i = 0; i < queries.length; i++) {
    array[ queries[i][0] - 1 ] += queries[i][2];
    array[ queries[i][1] ] -= queries[i][2];
  }

  array.reduce((acc, cur) => {
    let tmp = acc + cur;
    max = Math.max(max, tmp);

    return tmp;
  }, 0);

  return max;
};

/**
 * Brute force version
 *
*/
exports.crush2 = function(n, queries) {
  let array = new Array(n).fill(0, 0, n);
  let max = -Infinity;

  for (let i = 0; i < queries.length; i++) {
    for (let j = queries[i][0] - 1; j < queries[i][1]; j++) {
      array[j] += queries[i][2];

      if (array[j] > max) {
        max = array[j];
      }
    }
  }

  return max;
};