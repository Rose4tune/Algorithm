const sum = (arr) => arr.reduce((a, b) => a + b, 0);

function solution(queue1, queue2) {
    let sum1 = sum(queue1);
    let sum2 = sum(queue2);
    
    const md = (sum1 + sum2) / 2;
    const q = [...queue1, ...queue2];
    
    let left = 0;
    let right = queue1.length;
    
    for(let cnt = 0; cnt < queue1.length * 3; cnt++) {
        if(sum1 === md) return cnt;
        
        if(sum1 > md) sum1 -= q[left++]
        else sum1 += q[right++]
    }
    return -1;
}