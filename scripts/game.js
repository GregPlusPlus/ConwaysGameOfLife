console.log("Conway's Game of Life");

// Storing the interval ID used for Playing/Pause purposes
var intervalId = undefined;

// Initializing the grid size
var rows = 50;
var columns = 100;

// Initializing the 2 dimensional array
var grid = undefined;

// This function inits all the game components
function init() {
	makeCanvasElmnt(rows, columns); 			// Making the canvas according the width (columns) and the length (rows)
	makeGrid(document.getElementById("PRange").value);	// Making the grid according the randomization level
}

// This function makes the grid according the randomization level
function makeGrid(_p) {
	ctx.clearRect(0, 0, columns * 10, rows * 10); // Clear the canvas
	grid = initGame(rows, columns, _p); // Making the 2 dimensional array

	countPopulation(); // Counting/Displaying the population
}

// This function starts the game
function start() {
	intervalId = setInterval(play, 100); // Calling the 'play' function every 100ms
}

// This function is called every time to generate the next generation of cells
function play() {
	ctx.clearRect(0, 0, columns * 10, rows * 10); // Clear the canvas

	for(var i = 0 ; i < rows ; i++) {					// |- Scanning all cells
		for(var j = 0 ; j < columns ; j++) {				// |
			grid[i][j].countNeighbors(columns, rows, grid);		// Call the 'countNeighbors' function of the current cell
		}
	}

	for(var i = 0 ; i < rows ; i++) {		// |- Scanning all cells
		for(var j = 0 ; j < columns ; j++) {	// |
			grid[i][j].updateState();	// Updating all the cells
		}
	}

	countIterations(); // Counting/Displaying the number of iterations
	countPopulation(); // Counting/Displaying the population
}
