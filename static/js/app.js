// Assign the data from `data.js` to a descriptive variable
var $tbody = document.querySelector("tbody");
var $datetimeInput = document.querySelector("#datetime");
var $button = document.querySelector("#filter-btn");

// Select the button
$button.addEventListener("click", handleSearchButtonClick);

var filteredData = data;

function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    var data = filteredData[i];
    var fields = Object.keys(data);
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = data[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDatetime = $datetimeInput.value.trim().toLowerCase();

// Set filteredData to an array of all addresses who's "state" matches the filter
filteredData = data.filter(function(data) {
  var dataDatetime = data.datetime.substring(0, filterDatetime.length).toLowerCase();
  if (dataDatetime === filterDatetime) {
    return true;
  }
  return false;
  });
 
renderTable();
}

renderTable();


