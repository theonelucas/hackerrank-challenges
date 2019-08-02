// Manually
function rotLeft(a, d) {
    const newArray = [];
    for (let i = 0; i < a.length; i++) {
        let pos = i - d < 0 ? ((i - d) + a.length) : i - d;

        newArray[pos] = a[i];
    }

    return newArray;
}

const test = [
    { array: [1, 2, 3, 4, 5], rotations: 4 }
];
  
test.forEach((item) => console.log(rotLeft(item.array, item.rotations)));
