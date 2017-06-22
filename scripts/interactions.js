function interact(event) {
	var canvas = document.getElementById("canvas");
	var r = Math.floor((event.clientY - canvas.getBoundingClientRect().top) / 10);
	var c = Math.floor((event.clientX - canvas.getBoundingClientRect().left) / 10);

	grid[r][c].alive = !grid[r][c].alive;

	ctx.clearRect(0, 0, columns * 10, rows * 10);

	for(var i = 0 ; i < rows ; i++) {
		for(var j = 0 ; j < columns ; j++) {
			grid[i][j].countNeighbors(columns, rows, grid);
		}
	}

	for(var i = 0 ; i < rows ; i++) {
		for(var j = 0 ; j < columns ; j++) {
			grid[i][j].show();
		}
	}

	countPopulation();
}

function reset() {
	makeGrid(document.getElementById("PRange").value);
	iterations = 0;
	document.getElementById("iterations").innerHTML = "Iterations: " + iterations;
	pause();
}

function clearGrid() {
	document.getElementById("PRange").value = 0;
	reset();
}

function pause() {
		clearInterval(intervalId);
		intervalId = undefined;	
}

function toggle() {
	if(intervalId == undefined)
	{
		start();
	} else {
		pause();
	}
}