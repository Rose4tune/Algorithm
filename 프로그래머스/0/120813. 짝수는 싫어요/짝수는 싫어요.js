function solution(n) {
    return Array
        .from({length: n + 1}, (_, i) => i)
        .filter(n => n % 2 === 1)
}