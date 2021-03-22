// Create variable "sightings" from from data.js file
var sightings = data;

// Create table to be displayed on HTML page
// Select the HTML based on <tbody></tbody>
var tableBody=d3.select("tbody");
// Code below also works but does not format table
// var tableBody=d3.select("table");

// For every entry in the sightings
// Will ref "sightings" in var filteredData below
sightings.forEach(function(item){
    
    // Append a row in the table
    var row=tableBody.append("tr");
    
    // For every key (k) value (v) pair in the filtered data
    Object.entries(item).forEach(function([key, value]){
        
        // Append cells in each row
        var cell=row.append("td");

        // Add the text in each cell
        cell.text(value);
        });
});
console.log(sightings);


// Boilerplate code pulled from exercise 14/3/9
// Select the HTML button based on button id="filter-btn"
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers and assign them to target HTML objects noted below
button.on("click",runEnter);
form.on("submit",runEnter);

// The event handler function for the form - it will execute everything below as part of the "filter"
function runEnter() {

    // Prevents the page from refreshing - code below not needed for this exercise
    // d3.event.preventDefault();

    // Select the HTML input element based on <input class="form-control" id="datetime"
    // Will ref "datetime" in var filteredData below
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
   // Will ref "datetime" in var filteredData below
    var inputValue = inputElement.property("value");

    // Clears table before displaying filtered data
    tableBody.html("");

    // Filters data based filter search
    var filteredData = sightings.filter(sighting => sighting.datetime == inputValue);
    filteredData.forEach((UFOSighting) => {
        // Append the table based on filtered data
        var row = tableBody.append("tr");
        // Append the detailed data for each sighting in the table
        Object.entries(UFOSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
