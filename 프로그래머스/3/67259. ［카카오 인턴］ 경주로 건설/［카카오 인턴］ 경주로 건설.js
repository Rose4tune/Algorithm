function solution(board) {
    const n = board.length;
    
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    const cost = Array.from({ length: n }, () =>
        Array.from({ length: n }, () => Array(4).fill(Infinity))
    );
    
    const queue = [];
    
    for (let d = 0; d < 4; d++) {
        cost[0][0][d] = 0;
        queue.push([0, 0, d, 0]);
    }
    
    let head = 0;
    
    while (head < queue.length) {
        const [x, y, dir, curCost] = queue[head++];
        
        for (let nd = 0; nd < 4; nd++) {
            const nx = x + dx[nd];
            const ny = y + dy[nd];
            
            if (
                nx < 0 || nx >= n ||
                ny < 0 || ny >= n ||
                board[nx][ny] === 1
            ) continue;
            
            const addCost = dir === nd ? 100 : 600;
            const nextCost = curCost + addCost;
            
            if (cost[nx][ny][nd] > nextCost) {
                cost[nx][ny][nd] = nextCost;
                queue.push([nx, ny, nd, nextCost]);
            }
        }
    }
    
    return Math.min(...cost[n - 1][n - 1]);
}