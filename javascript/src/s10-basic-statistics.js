/**
 * Link: https://www.hackerrank.com/challenges/s10-basic-statistics
 *
*/

exports.processData = function(length, array) {
  array.sort((a, b) => a - b);

  const round = (value, precision) => {
    const multiplier = Math.pow(10, precision || 0);

    return (Math.round(value * multiplier) / multiplier).toFixed(1);
  };

  const meanFn = (numbers) => round(numbers.reduce((acc, curr) => acc + curr) / numbers.length, 1);

  const medianFn = (numbers) => {
    const target = length / 2;

    return round((length % 2 === 0) ? (numbers[target-1] + numbers[target]) / 2 : numbers[Math.floor(target)], 1);
  };

  const modeFn = (numbers) => {
    const count = [];
    let position = 0;

    // Count the number of occurences for each unique number
    while (position < length) {
      const pos = count.find((n) => n.number === numbers[position]) || count[count.push({ number: numbers[position], count: 0 }) - 1];
      let hard = false;

      for (let j = position; j <= length; j++) {
        if (numbers[position] === numbers[j]) {
          pos.count++;
        } else {
          position = j;
          hard = true;
          break;
        }
      }

      !hard && position++;
    }

    // Sort by number occurences
    count.sort((a, b) => b.count - a.count);

    // Get all the numbers with the highest count
    let a = [];
    for (let i = 0; i < count.length - 1; i++) {
      a.push(count[i].number);

      if (count[i+1].count !== count[i].count) {
        break;
      }
    }

    // Sort the highest numbers
    a.sort((a, b) => a - b);

    // Return only the smallest
    return a[0];
  };

  return `${meanFn(array)} ${medianFn(array)} ${modeFn(array)}`;
};
