exports.simpleArraySum = function(ar) {
  let result = 0;

  for (let i = 0; i < ar.length; i++) {
    result = result + ar[i];
  }

  return result;
};
