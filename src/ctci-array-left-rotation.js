exports.rotLeft = function(a, d) {
  const newArray = [];

  for (let i = 0; i < a.length; i++) {
    let pos = i - d < 0 ? ((i - d) + a.length) : i - d;

    newArray[pos] = a[i];
  }

  return newArray;
};
