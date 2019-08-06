exports.repeatedString = function(s, n) {
  const aCount = (str) => str.split('a').length - 1;
  const times = parseInt(n / s.length);
  const rest = n % s.length;

  return times * aCount(s) + aCount(s.slice(0, rest));
};
