// Initalizing some global variables
var iterations = 0;
var population = 0;
var lastPopulation = 0;

// This function counts/displays the population (alive cells)
function countPopulation() {
	population = 0; // Clear the population count

	for(var i = 0 ; i < rows ; i++) {		// |- Scanning cells
		for(var j = 0 ; j < columns ; j++) {	// |
			if(grid[i][j].alive) {		// If the scanned cell is alive
				population++;		// Then add 1 to the population count
			}
		}
	}

	var populationElmnt = document.getElementById("population"); // Gathering the 'population' element
	
	populationElmnt.innerHTML = "Population: " + population; // Displaying the population

	// Colouring the text
	if(population < lastPopulation) {			// The population is falling
		populationElmnt.style.color = "#fdb4cf"; // Red
	} else if(population == lastPopulation) {		// The population is stable
		populationElmnt.style.color = "#dbdcd6"; // White
	} else if(population > lastPopulation) {		// The population is rising
		populationElmnt.style.color = "#e2f6bc"; // Green
	}

	lastPopulation = population; // Storing the population
}

// This function counts/displays the number of iterations
function countIterations() {
	iterations++; // adding 1 to the iterations count
	document.getElementById("iterations").innerHTML = "Iterations: " + iterations; // Displaying the number of iterations
}
