function solution(cards1, cards2, goal) {
    let answer = "Yes";
    goal.forEach((g, i) => {
        if (cards1[0] === g) cards1.shift();
        else if (cards2[0] === g) cards2.shift();
        else answer = "No"
    })
    return answer;
}