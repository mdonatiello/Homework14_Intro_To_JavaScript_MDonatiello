// from data.js
var tableData = data;

// Display all UFO sightings
function tableDisplay(sightings) {
  var tbody = d3.select("tbody");
  sightings.forEach((dateData) => {
    var row = tbody.append("tr");
  Object.entries(dateData).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
};

function deleteTbody() {
  d3.select("tbody")
    .selectAll("tr").remove()
    .selectAll("td").remove();
};

tableDisplay(tableData);

// Select the button
var button = d3.select("#filter-btn");

// Filter and display the results
button.on("click", function(event) {
    d3.event.preventDefault();
    deleteTbody();
    // Select the input element and get the raw HTML code
    var inputValue = d3.select("#datetime").property("value");

    // filter data on user input and display filtered data or display all data if date box has no date in it
    if (inputValue.trim() === "") {
      var filteredData = tableData;
    } else {
      var filteredData = tableData.filter(sightings => sightings.datetime === inputValue.trim());
  };

// If no records found
  if (filteredData.length == 0) {
    d3.select("tbody")
      .append("tr")
      .append("td")
        .attr("colspan", 7)
        .html("<h4>No Records Found</h4>");
  };

  tableDisplay(filteredData);
});

