let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.shift();
let sum = 0;
const stack = [];

for (const n of input) {
  if (n !== 0) {
    // 푸시할 때 해당 값 누적
    stack.push(n);
    sum += n;
  } else {
    // 스택이 비어있지 않은 경우에만 pop 수행
    if (stack.length) {
      // pop한 값만큼 누적합에서 차감
      const removed = stack.pop();
      sum -= removed;
    }
  }
}

console.log(sum);