var ctx = undefined; //Initializing canvas context (global variable)

// This function creates a new 'canvas' element according to the number of rows and columns
function makeCanvasElmnt(r, c) {
	// Creating canvas element
	document.getElementById("container").innerHTML = 
		"<canvas id=\"canvas\" width=\"" + ((c * 10) - 1) + "\" height=\"" + ((r * 10) - 1) + "\" style=\"border: 1px solid black;\"></canvas>";

	// Allowing user to add/delete cells
	document.getElementById("canvas").addEventListener("click", function(event) {
		interact(event);
	}, false);

	// Gathering canvas context
	ctx = document.getElementById("canvas").getContext("2d");
	
	// Fixing canvas default translation
	ctx.translate(-.5, -.5);
}
