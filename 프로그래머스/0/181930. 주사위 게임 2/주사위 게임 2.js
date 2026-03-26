function solution(a, b, c) {
    const square = (num, cnt) => {
        for(let i = 1; i <= cnt; i++) {
            if(i === cnt - 1) return num * num
            return square(num, cnt - 1) * num
        }
    }
    
    const normal = a + b + c;
    const duble = square(a, 2) + square(b, 2) + square(c, 2);
    const cube = square(a, 3) + square(b, 3) + square(c, 3);
    
    if(a === b && a === c && b === c) return normal * duble * cube;
    if(a != b && a != c && b != c) return normal;
    return normal * duble;
}