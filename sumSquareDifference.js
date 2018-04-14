const sumSquareDifference = (n) => {
  let sumSquare = 0;
  let sum = 0;
  for (let i = 1; i <= n; i += 1) {
    sumSquare += i ** 2;
  }
  for (let j = 1; j <= n; j += 1) {
    sum += j;
  }
  return (sum ** 2) - sumSquare;
};
