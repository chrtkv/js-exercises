const areBracketsBalanced = (string) => {
  let count = 0;
  for (let i = 0; i < string.length; i += 1) {
    count = string[i] === '(' ? count += 1 : count -= 1;
    if (count < 0) {
      return false;
    }
  }
  return count === 0;
};
