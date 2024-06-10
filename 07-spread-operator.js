// Spread Operator => Meng-copy dan menggabungkan sebuah array
// Meng-copy array
const arr1 = [1, 2, 3, 4, 5];

const arr2 = [...arr1];

console.log("array 1", arr1); // array 1 [ 1, 2, 3, 4, 5 ]
console.log("array 2", arr2); // array 2 [ 1, 2, 3, 4, 5 ]

// Menggabungkan array
const arr3 = [1, 2, 3];

const arr4 = [4, 5, 6];

const mergedArray = [...arr3, ...arr4];

console.log(mergedArray); // [ 1, 2, 3, 4, 5, 6 ]
