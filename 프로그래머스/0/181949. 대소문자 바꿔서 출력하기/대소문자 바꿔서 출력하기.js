const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function(str) {
    const conversion = str
        .split('')
        .map(s => s === s.toUpperCase() ? s.toLowerCase() : s.toUpperCase())
        .join('');
    console.log(conversion);
});