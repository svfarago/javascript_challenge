// Create variable "tableData" from from data.js file
var sightings = data;

//Create table to be displayed on html page
var tbody=d3.select("tbody");
//Code below also works but does not format table
//var tableBody=d3.select("table");

//For every entry in the tableData
sightings.forEach(function(item){
    
    //Append a row in the table
    var row=tbody.append("tr");
    
    //For every key (k) value (v) pair in the filtered data
    Object.entries(item).forEach(function([key, value]){
        
        //Append cells in each row
        var cell=row.append("td");

        //Add the text in each cell
        cell.text(value);
        });
});
console.log(sightings);

//START HERE with more code and filtering
// Select the HTML button based on button id="filter-btn"
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers and assign to target objects in HTML file 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

    //POTATO - do I need this line of code?
    // Prevents the page from refreshing
    //d3.event.preventDefault();

    //Junk >??Select the input element and get the raw HTML node
    //Potato updated ufo-form-input now datetime
    //Select the HTML input element based on <input class="form-control" id="datetime" 
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Clears table before displaying filtered data
    tbody.html('');

    // Filters data based on input value
    var filteredData = sightings.filter(sighting => sighting.datetime == inputValue);
    filteredData.forEach((UFOSighting) => {
        // Append the table based on filtered data.
        var row = tbody.append("tr");
        // Append the detailed data for each sighting in the table
        Object.entries(UFOSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
