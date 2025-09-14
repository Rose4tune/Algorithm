function solution(s) {
  let count = 0;
  const isValid = (str) => {
    const stack = [];
    const pairs = { ')': '(', ']': '[', '}': '{' };

    for (const ch of str) {
      if ('([{'.includes(ch)) {
        stack.push(ch);
      } else {
        if (stack.length === 0) return false;
        const top = stack.pop();
        if (top !== pairs[ch]) return false;
      }
    }

    return stack.length === 0;
  };

  for (let i = 0; i < s.length; i++) {
    const rotated = s.slice(i) + s.slice(0, i);
    if (isValid(rotated)) count++;
  }

  return count;
}