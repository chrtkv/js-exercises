const reverseString = (str) => {
  const iter = (index, acc) => {
    if (str[index] === undefined) {
      return acc;
    }
    return iter(index + 1, `${str[index]}${acc}`);
  };
  return iter(0, '');
};
