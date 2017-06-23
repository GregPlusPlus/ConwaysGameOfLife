// This class represents a cell according to his coordinates, and his living probability
function Cell(r, c, p) {
	// Initializing properties
	this.row = r;
	this.column = c;
	this.alive = (Math.random() < p); // Define if the cell is alive in function of the randomization level
	this.wasAlive = false;
	this.neighbors = 0;

	// This function displays the cell into the canvas according to his coordinates, and his living state
	Cell.prototype.show = function() {
		ctx.beginPath();		// |
		ctx.lineWidth = "1";		// |- Start drawing
		ctx.strokeStyle = "#272822"; 	// |
		
		// Changing the cell's color according to his living state
		if(this.alive && this.wasAlive) {		// The cell stays alive
			ctx.fillStyle = "#FD971F"; // Orange
		} else if(this.alive && !this.wasAlive) { 	// The cell borns
			ctx.fillStyle = "#A6E22E"; // Green
		} else if(!this.alive && this.wasAlive) { 	// The cell dies
			ctx.fillStyle = "#66D9EF"; // Blue
		} else { 					// The cell stays dead
			ctx.fillStyle = "#272822"; // Gray
		}
		
		ctx.rect(this.column * 10, this.row * 10, 10, 10);	// |
		ctx.stroke();						// |- Drawing the cell
		ctx.fill();						// |

		this.showNeighborsCount(); // Display ne number of neighbors
	}

	// This function displays the number of neighbors
	Cell.prototype.showNeighborsCount = function() {
		ctx.fillStyle = "#5d6052";
		ctx.font = "10px Arial";
		ctx.fillText(this.neighbors, this.column * 10 + 2, this.row * 10 - 2 + 10); // Drawing the number of neighbors
	}

	// This function counts the number of neighbors of the cell according to the number of rows and columns
	Cell.prototype.countNeighbors = function(cg, rg, grid) {
		var x = this.column; 	// Only used to write shorter tests/loops
		var y = this.row;	// Only used to write shorter tests/loops
		this.neighbors = 0; 	// Reset the number of neighbors

		for(var i = x-1 ; i <= x+1 ; i ++) { 				// Scanning cells from x - 1 to x + 1
			for(var j = y-1 ; j <= y+1 ; j ++) {			// Scanning cells from y - 1 to y + 1
				if(i >= 0 && i < cg && j >= 0 && j < rg){	// If the scanned cell is inside the array
					if(i != x || j != y){			// If the scanned cell is not the current cell
						if(grid[j][i].alive) {		// If the scanned cell is alive
							this.neighbors++;	// Then, adding 1 to the count
						}
					}
				}
			}
		}
	}

	// This function updates the living state of the cell
	Cell.prototype.updateState = function() {
		this.wasAlive = this.alive; // Storing the "old" state

		if(this.neighbors == 3) {		// The cell borns
			this.alive = true;
		} else if(this.neighbors == 2) {	// The cell stays alive or dead
			this.alive = this.alive; // This line has no effect
		} else {				// The cell dies
			this.alive = false;
		}

		this.show(); // Display the cell
	}
}
