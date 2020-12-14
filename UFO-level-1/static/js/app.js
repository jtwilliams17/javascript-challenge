// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Data Table Creation Function
function tableCreation(data){
    data.forEach((alienReport) => {
    var row = tbody.append("tr");
    Object.entries(alienReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

tableCreation(tableData);

// Configure Date Filter
var button = d3.select("#filter-btn");

var form = d3.select("#filters");

button.on("click", runEnter);
form.on("submit",runEnter);

// Create the function to run for events
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    var filteredData = people.filter(instance => instance.datetime === inputValue);

    tableCreation(filteredData);
  }