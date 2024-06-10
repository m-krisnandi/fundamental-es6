// Destructuring => membuat variable baru dari element dari array atau objek
// Destructuring array
const arr = ["Muhamad", "Krisnandi"];

const [name1, name2] = arr;

console.log(name1); // Muhamad
console.log(name2); // Krisnandi

// Destructuring object
const obj = {
  name: "Muhamad Krisnandi",
  age: 23,
};

const { name, age } = obj;

console.log(name); // Muhamad Krisnandi
console.log(age); // 23

// Restructuring => Kebalikan dari Destructuring
// Membuat sebuah objek dari variable
const name3 = "Muhamad Krisnandi";
const age3 = 23;

const obj3 = { name3, age3 };
const array3 = [name3, age3];

console.log(obj3); // { name3: 'Muhamad Krisnandi', age3: 23 }
console.log(array3); // [ 'Muhamad Krisnandi', 23 ]
