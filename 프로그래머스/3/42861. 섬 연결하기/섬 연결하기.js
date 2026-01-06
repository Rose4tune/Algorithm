function solution(n, costs) {
    // 1. 비용 오름차순 정렬
    costs.sort((a, b) => a[2] - b[2]);
    
    // 2. union(같은 부모로 만들기), find(부모 찾기)
    let parent = Array.from({length: n}, (_, i) => i);
    function find(i) {
        if (parent[i] === i) return i;
        return parent[i] = find(parent[i]);
    }
    function union(i, j) {
        let rootI = find(i);
        let rootJ = find(j);
        if (rootI !== rootJ) {
            parent[rootI] = rootJ;
            return true;
        }
        return false;
    }
    
    // 3. 정렬된 비용으로 다리 연결
    let minCost = 0;
    let edgeCount = 0;
    
    for (const [u, v, cost] of costs) {
        if (union(u, v)) {
            minCost += cost;
            edgeCount++;
            if (edgeCount === n - 1) break;
        }
    }
    
    return minCost;
}