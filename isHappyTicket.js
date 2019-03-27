const isHappyTicket = (ticket) => {
	  const strTicket = String(ticket);
	  const firstPart = substr(strTicket, 0, 3);
	  const secondPart = substr(strTicket, 3, 3);
	  let firstSum = 0;
	  let secondSum = 0;
	  for (let i = 0; i < 3; i += 1) {
		      firstSum += Number(firstPart[i]);
		    }
	  for (let e = 0; e < 3; e += 1) {
		      secondSum += Number(secondPart[e]);
		    }
	  if (firstSum === secondSum) {
		      return true;
		    }
	  return false;
};
