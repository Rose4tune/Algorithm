const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const nums = input.slice(1);

let positives = []; // 2 이상 양수
let negatives = []; // 0 이하 음수
let ones = 0;
let zero = 0;

nums.forEach((num) => {
  if (num > 1) positives.push(num);
  else if (num === 1) ones++;
  else if (num === 0) zero++;
  else negatives.push(num);
});

positives.sort((a, b) => b - a);
negatives.sort((a, b) => a - b);

let result = 0;

// 양수 묶기
for (let i = 0; i < positives.length - 1; i += 2) {
  result += positives[i] * positives[i + 1];
}
if (positives.length % 2 === 1) {
  result += positives[positives.length - 1];
}

// 음수 묶기
for (let i = 0; i < negatives.length - 1; i += 2) {
  result += negatives[i] * negatives[i + 1];
}
if (negatives.length % 2 === 1) {
  if (zero === 0) result += negatives[negatives.length - 1];
  // zero가 있으면 마지막 음수는 버림 (0 곱해서 날려버림)
}

// 1은 더하는 게 이득
result += ones;

console.log(result);
