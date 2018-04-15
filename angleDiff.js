const diff = (m, n) => {
	  const difference = Math.abs(m - n);
	  if (difference > 180) {
		      return 360 - difference;
		    }
	  return difference;
};
