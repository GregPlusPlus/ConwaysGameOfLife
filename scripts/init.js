function initGame(r, c, p) {
	var a = new Array(r);

	for(var i = 0 ; i < r ; i++) {
		a[i] = new Array(c);

		for(var j = 0 ; j < c ; j++) {
			a[i][j] = new Cell(i, j, p);
		}
	}

	for(var i = 0 ; i < rows ; i++) {
		for(var j = 0 ; j < columns ; j++) {
			a[i][j].countNeighbors(columns, rows, a);
		}
	}

	for(var i = 0 ; i < rows ; i++) {
		for(var j = 0 ; j < columns ; j++) {
			a[i][j].show();
		}
	}
	return a;
}