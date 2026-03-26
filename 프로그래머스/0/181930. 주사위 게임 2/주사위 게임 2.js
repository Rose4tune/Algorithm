function solution(a, b, c) {
    const normal = a + b + c;
    const duble = Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2);
    const cube = Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3);
    
    if(a === b && a === c && b === c) return normal * duble * cube;
    if(a != b && a != c && b != c) return normal;
    return normal * duble;
}