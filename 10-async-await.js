// Async Await => menangani promise dengan singkat dan efisien
const taskPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Selesai"), 3000);
  });
};

const task = async () => {
  const done = await taskPromise();
  console.log(done);
};

console.log("Mulai");
task();
console.log("Akhir");
