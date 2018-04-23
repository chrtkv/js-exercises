const reverseInt = (num) => {
  let n = num;
  let result = '';
  if (n < 0) {
    n = Math.abs(num);
    const len = String(n).length;
    for (let i = len - 1; i >= 0; i -= 1) {
      result += `${String(n)[i]}`;
    }
    result = `-${result}`;
    return Number(result);
  }
  const len = String(n).length;
  for (let i = len - 1; i >= 0; i -= 1) {
    result += `${String(n)[i]}`;
  }
  return Number(result);
};

