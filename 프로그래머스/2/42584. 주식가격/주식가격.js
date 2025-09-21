function solution(prices) {
    return prices.map((p, i) => {
        let cnt = 0;
        
        for(let j = i + 1; j < prices.length; j++) {
            cnt++;
            if (p > prices[j]) break;
        }
        
        return cnt
    });
}