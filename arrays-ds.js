function reverseArray(a) {
    let result = [];

    for (let i = a.length - 1; i >= 0; i--) {
        result.push(a[i]);
    }

    return result;
}

const test = [
    [1, 4, 3, 2]
];
  
test.forEach((item) =>  console.log(reverseArray(item)) );
