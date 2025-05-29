const fs = require("fs");
const [t, ...datas] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < Number(t); i++) {
  const s = datas[i];
  let balance = 0;
  let valid = true;

  for (const ch of s) {
    if (ch === "(") {
      balance++;
    } else {
      balance--;
    }
    if (balance < 0) {
      valid = false;
      break;
    }
  }

  console.log(valid && balance === 0 ? "YES" : "NO");
}