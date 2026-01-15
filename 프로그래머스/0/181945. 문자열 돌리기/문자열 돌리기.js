const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function(line) {
    [...line].forEach(s => console.log(s))
});