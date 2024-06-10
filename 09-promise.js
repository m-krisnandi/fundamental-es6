// Promise => keberhasasilan/kegagalan dari sebuah event yang bersifat asynchronus
// fullfilled = keadaan terpenuhi
// rejected = keadaan tidak terpenuhi
// pending = waktu tunggu dari keadaan
// resolve = janji terpenuhi
// reject = janji tidak terpenuhi
// finnaly = waktu tunggu selesai
let done = true;

const task = new Promise((resolve, reject) => {
  if (done) {
    resolve("Task berhasil diselesaikan");
  } else {
    reject("Task belum diselesaikan");
  }
});

console.log(task); // Promise { 'Task berhasil diselesaikan' }

// untuk mengambil value promise
task
  .then((response) => console.log(response))
  .catch((response) => console.log(response)); // Task berhasil diselesaikan
