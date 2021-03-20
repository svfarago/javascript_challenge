// Create variable "tableData" from from data.js file
var tableData = data;

//Create table to be displayed on html page
var tableBody=d3.select("table");
//Code below also works but formats the table data differently - stripes
//var tableBody=d3.select("tbody");

//For every entry in the tableData
tableData.forEach(function(item){
    
    //Append a row in the table
    var row=tableBody.append("tr");
    
    //For every key (k) value (v) pair in the filtered data
    Object.entries(item).forEach(function([k, v]){
        
        //Append cells in each row
        var cell=row.append("td");

        //Add the text in each cell
        cell.text(v);
        });
});
console.log(tableData);

//START HERE with more code and filtering
