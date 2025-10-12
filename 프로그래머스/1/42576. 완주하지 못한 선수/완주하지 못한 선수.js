function solution(participant, completion) {
    const obj = {};
    
    participant.forEach(p => {
        if(obj[p]) {
            obj[p] += 1;
        } else {
            obj[p] = 1;
        }
    });
    
    for (const c of completion) {
        obj[c] -= 1;
    }
    
    for (const key in obj) {
        if (obj[key] > 0) {
            return key;
        }
    }
}