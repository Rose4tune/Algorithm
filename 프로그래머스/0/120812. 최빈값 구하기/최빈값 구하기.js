function solution(array) {
    const freq = array.reduce((acc, n) => {
        acc[n] = (acc[n] ?? 0) +1;
        return acc
    }, {});
    const max = Math.max(...Object.values(freq));
    const modes = Object.entries(freq).filter(([, cnt]) => cnt === max);
    return modes.length > 1 ? -1 : Number(modes[0][0]);
}