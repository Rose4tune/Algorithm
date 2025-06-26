function solution(k, tangerine) {
    var answer = 0;
    const obj = {};
    
    tangerine.forEach(t => obj[t] = ++obj[t] || 1);
    const tCnt = Object.values(obj).sort((a,b) => b - a);
    
    for (const t of tCnt) {
      answer++;
      if (k > t) k -= t;
      else break;
    }
    
    return answer;
}