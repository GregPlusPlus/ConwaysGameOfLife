// This function inits the 2 dimensional array according the number of rows/columns and the randimozation level
function initGame(r, c, p) {
	
	/*         V------- A column
	 a b c d e f
	-------------
	|o|o|o|o|o|o| 1 <-- A row
	-------------
	|o|o|o|o|o|o| 2
	-------------
	|o|o|o|o|o|o| 3
	-------------
	|o|o|o|o|o|o| 4
	-------------
	*/
	
	var a = new Array(r); // Create a new array in function of the number of rows

	for(var i = 0 ; i < r ; i++) { // Looping through the rows
		a[i] = new Array(c); // Creating a new row (in function of the number of columns)

		for(var j = 0 ; j < c ; j++) { // Looping through the columns
			a[i][j] = new Cell(i, j, p); // Creating a new Cell according the row/column and the randimozation level
		}
	}

	for(var i = 0 ; i < rows ; i++) {		// |-Scanning cells
		for(var j = 0 ; j < columns ; j++) {	// |
			a[i][j].countNeighbors(columns, rows, a); // Call the 'countNeighbors' from the current cell
		}
	}

	for(var i = 0 ; i < rows ; i++) {		// |-Scanning cells
		for(var j = 0 ; j < columns ; j++) {	// |
			a[i][j].show(); // Displaying the current cell
		}
	}
	
	return a; // Return the 2 dimensional array
}
