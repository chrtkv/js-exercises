const formattedTime = (n) => {

	    let hours = Math.floor(n / 60);
	    let minutes = n % 60;
	    
	    if (hours < 10){
		          hours = '0'+hours;
		        }
	    
	    if (minutes < 10){
		          minutes = '0'+minutes;
		        }

	    return `${hours}:${minutes}`;
}
