const fs = require("fs");
const [M, N] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const isPrime = new Array(N + 1).fill(true);
isPrime[0] = isPrime[1] = false;

for (let i = 2; i <= Math.sqrt(N); i++) {
  if (!isPrime[i]) continue;
  for (let j = i * i; j <= N; j += i) {
    isPrime[j] = false;
  }
}

const answer = [];
for (let i = M; i <= N; i++) {
  if (isPrime[i]) answer.push(i);
}

console.log(answer.join("\n"));