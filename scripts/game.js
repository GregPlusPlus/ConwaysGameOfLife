console.log("Conway's Game of Life");

var intervalId = undefined;

var rows = 50;
var columns = 100;
var grid = undefined;

function init() {
	makeCanvasElmnt(rows, columns);
	makeGrid(document.getElementById("PRange").value);
}

function makeGrid(_p) {
	ctx.clearRect(0, 0, columns * 10, rows * 10);
	grid = initGame(rows, columns, _p);

	countPopulation();
}

function start() {
	intervalId = setInterval(play, 100);
}

function play() {
	ctx.clearRect(0, 0, columns * 10, rows * 10);

	for(var i = 0 ; i < rows ; i++) {
		for(var j = 0 ; j < columns ; j++) {
			grid[i][j].countNeighbors(columns, rows, grid);
		}
	}

	for(var i = 0 ; i < rows ; i++) {
		for(var j = 0 ; j < columns ; j++) {
			grid[i][j].updateState();
		}
	}

	countIterations();
	countPopulation();
}
