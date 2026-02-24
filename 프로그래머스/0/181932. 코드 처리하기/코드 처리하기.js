function solution(code) {
    let ret = '', mode = 0;
    
    return [...code].map((c, i) => {    
        if (c === '1') {
            mode = 1 - mode;
            return null
        }
        if (i % 2 === mode) return c
    }).join('') || 'EMPTY'
}