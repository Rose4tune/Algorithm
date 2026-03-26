function solution(a, d, included) {
    return included.reduce((acc, crr, i) => crr ? acc += d * i + a : acc, 0)
}