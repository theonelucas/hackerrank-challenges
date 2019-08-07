exports.minimumSwaps = function(arr) {
  let swaps = 0;
  let length = arr.length;

  for (let i = 0; i <= length - 1; i++) {
    if (arr[i] !== i + 1) {
      for (let j = i + 1; j <= arr.length - 1; j++) {
        if (arr[j] === i + 1) {
          let tmp = arr[i];
          arr[i] = arr[j];
          arr[j] = tmp;

          swaps++;
          break;
        }
      }
    }
  }

  return swaps;
};
