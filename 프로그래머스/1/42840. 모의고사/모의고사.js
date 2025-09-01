function solution(answers) {
    const score = [0, 0, 0];
    const people = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];
    
    answers.forEach((answer, i) => {
        people.forEach((pattern, j) => {
            if(answer === pattern[i % pattern.length]) {
                score[j]++;
            }
        })
    })
    
    const maxScore = Math.max(...score);
    
    const result = [];
    score.forEach((s, i) => {
        if (s === maxScore) {
            result.push(i + 1)
        }
    })
    
    return result;
}