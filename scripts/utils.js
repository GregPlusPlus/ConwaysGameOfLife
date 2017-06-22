var iterations = 0;
var population = 0;
var lastPopulation = 0;

function countPopulation() {
	population = 0;

	for(var i = 0 ; i < rows ; i++) {
		for(var j = 0 ; j < columns ; j++) {
			if(grid[i][j].alive) {
				population++;
			}
		}
	}

	document.getElementById("population").innerHTML = "Population: " + population;
	
	var populationElmnt = document.getElementById("population");

	if(population < lastPopulation) {
		populationElmnt.style.color = "#fdb4cf";
	} else if(population == lastPopulation) {
		populationElmnt.style.color = "#dbdcd6";
	} else if(population > lastPopulation) {
		populationElmnt.style.color = "#e2f6bc";
	}

	lastPopulation = population;
}

function countIterations() {
	iterations++;
	document.getElementById("iterations").innerHTML = "Iterations: " + iterations;
}
