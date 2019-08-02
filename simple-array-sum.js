function simpleArraySum(ar) {
    let result = 0;

    for (let i = 0; i < ar.length; i++) {
        result = result + ar[i];
    }

    return result;
}

const test = [
    [1, 2, 3, 4, 10, 11]
];
  
test.forEach((item) =>  console.log(simpleArraySum(item)));
