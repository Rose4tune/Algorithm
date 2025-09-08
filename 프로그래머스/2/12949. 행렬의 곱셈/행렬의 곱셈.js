function solution(arr1, arr2) {
  const transposed = arr2[0].map((_, i) => arr2.map(row => row[i]));

  return arr1.map((row) =>
    transposed.map((col) =>
      row.reduce((acc, cur, i) => acc + cur * col[i], 0)
    )
  );
}