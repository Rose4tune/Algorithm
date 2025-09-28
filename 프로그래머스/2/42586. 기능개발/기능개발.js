function solution(progresses, speeds) {
    const answer = [];
    const days = progresses.map((p, i) => Math.ceil((100 - p)/speeds[i]));
    let cnt = 1, max = days[0];
    
    for (let i = 1; i < days.length; i++) {
        if (days[i] <= max) {
            cnt++;
        } else {
            max = days[i];
            answer.push(cnt);
            cnt = 1;
        }
    }
    
    answer.push(cnt);
    
    return answer;
}