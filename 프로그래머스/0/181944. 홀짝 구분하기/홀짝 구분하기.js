const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function(n) {
    const isOdd = Number(n) % 2 ? 'odd' : 'even';
    console.log(`${n} is ${isOdd}`)
})