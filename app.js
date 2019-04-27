// from data.js
var tableData = data;


// YOUR CODE HERE!
var tbody = d3.select("tbody");
console.log(data);

//loop through and append data
data.forEach((ufoData) => {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
  

// Select the submit button
var submit = d3.select("#filter-btn");
submit.on("click", function() {
  d3.event.preventDefault();
  d3.selectAll("td").remove();
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  console.log(inputValue);

  //filter the data
  var filterData = data.filter(ufoFilter=> ufoFilter.datetime === inputValue);
  console.log(filterData);

  // Displaying filtered data
  filterData.forEach((filData) => {
    var row = tbody.append("tr");
    Object.entries(filData).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
});


