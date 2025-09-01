function solution(answers) {
    const people = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];
    
	const scores = people.map(
		(pattern) => answers.filter((answer, i) =>
			answer === pattern[i % pattern.length]).length
	);
    
    const maxScore = Math.max(...scores);
    return scores
        .map((score, idx) => (score === maxScore ? idx + 1 : null))
        .filter(Boolean);
}