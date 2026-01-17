function solution(array) {
    return array
        .sort((a, b) => a - b)
        .at(Math.floor(array.length / 2))
}