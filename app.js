// An instance of our SimpleMap, created below when the window loads.
let map;

// Update the map to show markers for the set of observations
function updateMap(observations, map) {
  // Clear the current markers on the map (if any)
  map.clear();

  for (var c = 0; c < observations.length; c++) {
    map.addObservation(observations[c]);
  }
}

// Update the table to show markers for the set of observations
function updateTable(observations) {
  // Remove any current data from the table
  clearAllTableRows();

  // Populate the table with all observation data we want to show
  observations.forEach((observation) => {
    var ObRow = buildRowForObservation(observation);
    addRowToTable(ObRow);
  });
}

// Show all species on the map and table
function showAll() {
  // Get all the observations from our data.js and format them so we can work with the data
  const observations = getAllObservations();

  // Update the map and table
  executeUpdates(observations, map, `All Species (${observations.length})`);
}

// Show native species on the map and table
function showOnlyNative() {
  // Get all the observations from our data.js and format them so we can work with the data
  const observations = getAllObservations();
  // Filter out any that aren't native species
  const native = filterOnlyNative(observations);

  // Update the map and table
  executeUpdates(native, map, `Only Native Species (${native.length})`);
}

// Show introduced species on the map and table
function showOnlyIntroduced() {
  // Get all the observations from our data.js and format them so we can work with the data
  const observations = getAllObservations();
  // Filter out any that aren't introduced species
  const introduced = filterOnlyIntroduced(observations);

  // Update the map and table
  executeUpdates(
    introduced,
    map,
    `Only Introduced Species (${introduced.length})`
  );
}

function executeUpdates(object, map, title) {
  updateMap(object, map);
  updateTable(object);
  updateTableTitle(title);
}

function start() {
  // Create our map object for Seneca's Newnham campus
  map = new SimpleMap("map-container", 43.7955, -79.3496);

  // TODO: create click handlers for all three buttons.
  // The "All Species" button should call the showAll function.
  // The "Only Native Species" button should call the showOnlyNative function.
  // The "Only Introduced Species" button should call the showOnlyIntroduced function.
  // In your solution, show both ways of creating click event handlers (i.e.,
  // using the on* property and also addEventListener function).
  document.getElementById("show-all").addEventListener("click", showAll);
  document
    .getElementById("show-native")
    .addEventListener("click", showOnlyNative);
  document
    .getElementById("show-introduced")
    .addEventListener("click", showOnlyIntroduced);

  // Show all species observations by default when we start.
  showAll();
}
window.onload = start;
