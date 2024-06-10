const hello = (name, umur) => ({
    status: 'OK',
    message: `Hello ${name} umur ${umur}`
});

const hello2 = name => {
    if(!name) {
        return 'Name is required';
    }
    return `Hello ${name}`
}

console.log(hello('Muhamad Krisnandi', 23))
console.log(hello2()) // <-- output Name is required
console.log(hello2('Muhamad Krisnandi')) // <-- output Muhamad Krisnandi