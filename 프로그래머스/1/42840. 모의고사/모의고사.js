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
    return score
        .map((score, idx) => (score === maxScore ? idx + 1 : null))
        .filter((v) => v !== null);
}