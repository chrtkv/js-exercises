const invertCase = (str) => {
	  const strLength = length(str);
	  const upString = toUpperCase(str);
	  let result = '';
	  for (let i = 0; i < strLength; i = i + 1) {
		      if (str[i] === upString[i]) {
			            result += toLowerCase(str[i]);
			          } else {
					        result += upString[i];
					      }
		    }
	  return result;
};
