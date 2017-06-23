// This function is called wen 'click' event is fired
function interact(event) {
	var canvas = document.getElementById("canvas"); // Gathering 'canvas' element
	var r = Math.floor((event.clientY - canvas.getBoundingClientRect().top) / 10); // Gathering row
	var c = Math.floor((event.clientX - canvas.getBoundingClientRect().left) / 10); // Gathering column

	grid[r][c].alive = !grid[r][c].alive; // Toggling cell's life state

	ctx.clearRect(0, 0, columns * 10, rows * 10); // Clear canvas

	for(var i = 0 ; i < rows ; i++) {		// |- Scanning cells
		for(var j = 0 ; j < columns ; j++) {	// |
			grid[i][j].countNeighbors(columns, rows, grid); // Updating neighbors
		}
	}

	for(var i = 0 ; i < rows ; i++) {		// |- Scanning cells
		for(var j = 0 ; j < columns ; j++) {	// |
			grid[i][j].show(); // Dispay cell
		}
	}

	countPopulation(); // Update population
}

// This function resets the game
function reset() {
	makeGrid(document.getElementById("PRange").value); // Creating a new grid
	iterations = 0;
	document.getElementById("iterations").innerHTML = "Iterations: " + iterations;
	pause(); // Pause game
}

// This function clears the grid (removes all alive cells)
function clearGrid() {
	document.getElementById("PRange").value = 0; // Set randomization level to 0
	reset(); // Reset the game
}

// This function pauses the game
function pause() {
		clearInterval(intervalId); // Removing the interval
		intervalId = undefined;	
}

// This function Starts/Pauses/Resumes the game
function toggle() {
	if(intervalId == undefined) {
		start(); // Start/Resume the game
	} else {
		pause(); // Pause the game
	}
}
