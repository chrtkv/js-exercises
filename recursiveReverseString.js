const reverse = (str) => {
  const len = str.length;
  if (len === 0) {
    return str;
  }
  return `${str[len - 1]}${reverse(str.substr(0, len - 1))}`;
};

