var counter = 0;
function start() 
 {
 	counter++;
 	if (counter%2==0) {
 		document.getElementById('seal').src = "./黑.png";	
 	}
    else{
   document.getElementById('seal').src = "./金.png";	
    }

}

setInterval(start, 1000);
window.addEventListener("load", start ,false);