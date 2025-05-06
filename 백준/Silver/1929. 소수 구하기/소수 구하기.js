const fs = require("fs");
const [M, N] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const isPrime = new Uint8Array(N + 1).fill(1);
isPrime[0] = isPrime[1] = 0;

let output = "";

for (let i = 2; i <= N; i++) {
  if (!isPrime[i]) continue;
  if (i >= M) output += i + "\n";

  for (let j = i * i; j <= N; j += i) {
    isPrime[j] = 0;
  }
}

process.stdout.write(output);