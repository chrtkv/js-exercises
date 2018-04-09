const substr = (str, index = 0, len = getLength(str)) => {
	  if (len < 0) {
		      len = 1;
		    }
	  if (getLength(str) === 0) {
		      return '';
		    }
	  if (index < 0) {
		      index = 0;
		    }
	  if ((index + len) > getLength(str)) {
		      len = getLength(str) - index;
		    }
	  if (index > (getLength(str) - 1)) {
		      return '';
		    }
	  let result = '';
	  let temp = '';
	  for (let i = index; i < getLength(str); i += 1) {
		      temp += str[i];
		    }
	  let i2 = 0;
	  while (i2 < len) {
		      result += temp[i2];
		      i2 += 1;
		    }
	  return result;
};
