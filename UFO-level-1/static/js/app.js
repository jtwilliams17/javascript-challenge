// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Data Table Creation Function
function tableCreation(data) {
  tbody.html("");

  data.forEach((dataRow) => {

    var row = tbody.append("tr");

    Object.values(dataRow).forEach((value) => {
      var cell = row.append("td");
        cell.text(value);
      }
    );
  });
}
// Create the function to run for events
function runEnter() {
  
    // Select the input element and get the raw HTML node
    var date = d3.select("#datetime").property("value");
  
    var filteredData = tableData;

    if (date) {

      filteredData = filteredData.filter(row => row.datetime === date);
    }

    tableCreation(filteredData);
  }
  d3.selectAll("#filter-btn").on("click", runEnter);

  tableCreation(tableData);