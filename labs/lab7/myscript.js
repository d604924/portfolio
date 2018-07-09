function start()
 {
	var button = document.getElementById( "Button");
	button.addEventListener( "click", displayVolume, false);
}

function displayVolume() 
 {
	document.getElementById('myid').innerHTML = 'Welcome!';
}

window.addEventListener("load", start ,false);