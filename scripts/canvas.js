var ctx = undefined;

function makeCanvasElmnt(r, c) {
	document.getElementById("container").innerHTML = "<canvas id=\"canvas\" width=\"" + ((c * 10) - 1) + "\" height=\"" + ((r * 10) - 1) + "\" style=\"border: 1px solid black;\"></canvas>";

	document.getElementById("canvas").addEventListener("click", function(event) {
		interact(event);
	}, false);

	ctx = document.getElementById("canvas").getContext("2d");
	ctx.translate(-.5, -.5);
}