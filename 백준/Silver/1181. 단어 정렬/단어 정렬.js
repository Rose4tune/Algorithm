let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();
const words = new Set(input);
const answer = [...words].sort((a, b) => a.length !== b.length ? a.length - b.length : a.localeCompare(b)).join('\n');

console.log(answer)