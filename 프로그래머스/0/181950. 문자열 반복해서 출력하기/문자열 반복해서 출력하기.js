const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function(line) {
    const [str, n] = line.split(' ');
    let answer = '';
    for (let i = 0; i < n; i++) {
        answer += str
    };
    console.log(answer);
});