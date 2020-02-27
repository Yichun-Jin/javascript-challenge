// from data.js
var tableData = data;

// YOUR CODE HERE!

// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a 
// table to your web page and then adds new rows of data for each UFO sighting.
var table = d3.select('tbody')

function tableCreate(data) {
    table.html("");
    data.forEach((dataRows) => { 
        var row = table.append('tr');
        Object.values(dataRows).forEach((value) => {
            var cell = row.append('td');
            cell.text(value);
        });
    });
    
}
// Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.
tableCreate(tableData)


// Use a date form in your HTML document and write JavaScript code that will listen for events and search through 
// the date/time column to find rows that match user input.
function filterClicker(){
    var date = d3.select('#datetime').property('value');
    var filterData = tableData;
    if (date){
        filterData = filterData.filter(row => row.datetime===date);
    }
    tableCreate(filterData)
}

d3.selectAll("#filter-btn").on('click',filterClicker)

