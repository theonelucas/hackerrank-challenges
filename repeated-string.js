function repeatedString(s, n) {
  const aCount = (str) => str.split('a').length - 1;
  const times = parseInt(n / s.length);

  console.log(times);

  const rest = n % s.length;

  return times * aCount(s) + aCount(s.slice(0, rest));
}


const test = [
  { s: 'aba', n: 10 }, // 7
  // { s: 'a', n: 1000000 }, // 10
  { s: 'a', n: 1000000000000 }, // 1000000000000
];

test.forEach((item) =>  console.log(repeatedString(item.s, item.n)) );


