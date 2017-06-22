function Cell(r, c, p) {
	var self = this;
	this.row = r;
	this.column = c;
	this.alive = (Math.random() < p);
	this.wasAlive = false;
	this.neighbors = 0;

	Cell.prototype.show = function() {
		if(this.alive && this.wasAlive)
		{
			ctx.beginPath();
			ctx.lineWidth = "1";
			ctx.strokeStyle = "#272822";
			ctx.fillStyle = "#FD971F";
			ctx.rect(this.column * 10, this.row * 10, 10, 10);
			ctx.stroke();
			ctx.fill();
		} else if(this.alive && !this.wasAlive) {
			ctx.beginPath();
			ctx.lineWidth = "1";
			ctx.strokeStyle = "#272822";
			ctx.fillStyle = "#A6E22E";
			ctx.rect(this.column * 10, this.row * 10, 10, 10);
			ctx.stroke();
			ctx.fill();
		} else if(!this.alive && this.wasAlive) {
			ctx.beginPath();
			ctx.lineWidth = "1";
			ctx.strokeStyle = "#272822";
			ctx.fillStyle = "#66D9EF";
			ctx.rect(this.column * 10, this.row * 10, 10, 10);
			ctx.stroke();
			ctx.fill();
		} else {
			ctx.beginPath();
			ctx.lineWidth = "1";
			ctx.strokeStyle = "#272822";
			ctx.fillStyle = "#272822";
			ctx.rect(this.column * 10, this.row * 10, 10, 10);
			ctx.stroke();
			ctx.fill();
		}

		this.showNeighborsCount();
	}

	Cell.prototype.showNeighborsCount = function() {
		ctx.fillStyle = "#5d6052";
		ctx.font = "10px Arial";
		ctx.fillText(this.neighbors, this.column * 10 + 2, this.row * 10 - 2 + 10);
	}

	Cell.prototype.countNeighbors = function(cg, rg, grid) {
		var x = this.column;
		var y = this.row;
		this.neighbors = 0;

		for(var i = x-1 ; i <= x+1 ; i ++) {
			for(var j = y-1 ; j <= y+1 ; j ++) {
				if(i >= 0 && i < cg && j >= 0 && j < rg){
					if(i != x || j != y){
						if(grid[j][i].alive) {
							this.neighbors++;
						}
					}
				}
			}
		}
	}

	Cell.prototype.updateState = function() {
		this.wasAlive = this.alive;

		if(this.neighbors == 3) {
			this.alive = true;
		} else if(this.neighbors == 2) {
			this.alive = this.alive;
		} else {
			this.alive = false;
		}

		this.show();
	}
}