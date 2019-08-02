function minimumBribes(q) {
  let total = 0;
  let lastDiff = -1;

  let arrayToCompare = [];
  let bribes = 0;

  for (let j = 0; j < q.length; j++) {
    arrayToCompare.push(j+1);
  }

  const reorderArray = (array, cursor, briber) => {
    
    array[cursor+1] = cursor;
    array[cursor] = briber;
    
    for (let i = cursor; i < array.length - 1; i++) {
      if (i === cursor) {
        array[i]
        
      }
      
      array[i] = array[i+1];
    }

    return array;
  };

  for (let i = 0; i < q.length; i++) {

    if (q[i] > i+1) {
      console.log(q[i]);

      
      arrayToCompare = reorderArray(arrayToCompare, i, i+1);

    }
    
    
    

    // console.log(i+1, q[i], bits);

    // lastDiff = bits;
    
                               // 1  2  5   3  7  8   6   4  - 2, 2, 2, 1 for ( i -> lastone-1) { j = i+1 -> lastone if(j < i) t++ } } nlogn

      // console.log(`${bits}`);

                               


                              //  1 2 5 3 4 6 7 8      2
                              //  1 2 5 3 7 4 6 8      2
                              //  1 2 5 3 7 8 4 6      2
                              //  1 2 5 3 7 8 6 4      1
                                

                               



      
      
    
  }

  arrayToCompare

  return total;
}


const test = [
  // [ 1, 2, 5, 3, 4, 7, 8, 6 ], // 4
  // [ 2, 1, 5, 3, 4 ], // 3 (-2 3 -2)
  // [ 2, 5, 1, 3, 4 ], // Too chaotic
   [ 1, 2, 5, 3, 7, 8, 6, 4 ], // 7
  // [ 5, 1, 2, 3, 7, 8, 6, 4 ] // Too chaotic
];
  
test.forEach((item) =>  console.log(minimumBribes(item)) );