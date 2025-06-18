function solution(storey) {
  let answer = 0;

  while (storey > 0) {
    let digit = storey % 10;
    storey = Math.floor(storey / 10);

    if (digit < 5) {
      answer += digit;
    } else if (digit > 5) {
      answer += (10 - digit);
      storey += 1;
    } else {
      if ((storey % 10) >= 5) {
        answer += (10 - digit);
        storey += 1;
      } else {
        answer += digit;
      }
    }
  }

  return answer;
}