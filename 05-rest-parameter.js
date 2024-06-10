// Rest Parameter yaitu function memiliki jumlah params yang tak terbatas
function sum(...rest) {
  let sum = 0;
  for (let number of rest) sum += number;
  return sum;
}

console.log(sum(4, 3, 23, 5, 213, 53, 33));

// Bisa digabung dengan params lain juga tapi harus disimpan di paling belakang rest nya
function sum2(initVal, ...rest) {
  let sum = 0;
  for (let number of rest) sum += number;
  return initVal + sum;
}

console.log(sum2(10, 5));
