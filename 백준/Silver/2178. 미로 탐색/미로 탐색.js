const fs = require("fs");
const [line1, ...lines] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = line1.split(" ").map(Number);
const maze = lines.map((row) => row.split("").map(Number));
const dist = Array.from({ length: n }, () => Array(m).fill(0));
const visited = Array.from({ length: n }, () => Array(m).fill(false));
const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
const queue = [];

queue.push([0, 0]);
visited[0][0] = true;
dist[0][0] = 1;

while (queue.length) {
  const [x, y] = queue.shift();

  for (const [dx, dy] of dirs) {
    const nx = x + dx;
    const ny = y + dy;

    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
    if (visited[nx][ny] || maze[nx][ny] === 0) continue;

    visited[nx][ny] = true;
    dist[nx][ny] = dist[x][y] + 1;
    queue.push([nx, ny]);
  }
}

console.log(dist[n - 1][m - 1]);