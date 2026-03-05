function solution(N, road, K) {
  const dist = Array(N + 1).fill(Infinity);
  const graph = Array.from(Array(N + 1), () => []);

  road.forEach((info) => {
    const [n1, n2, d] = info;
    graph[n1].push({ to: n2, dist: d });
    graph[n2].push({ to: n1, dist: d });
  });

  const queue = [{ to: 1, dist: 0 }];
  dist[1] = 0;
  while (queue.length) {
    const { to } = queue.pop();

    graph[to].forEach((next) => {
      const acc = dist[to] + next.dist;
      if (dist[next.to] > acc) {
        dist[next.to] = acc;
        queue.push(next);
      }
    });
  }
    
  return dist.filter((item) => item <= K).length;
}