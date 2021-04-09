function addHtmlTableRow() {
  var table = document.getElementById("table"),
  newRow = table.insert(table.length),
  cell = newRow.insertCell(0),
  cell = newRow.insertCell(1),
  cell = newRow.insertCell(2),
  fname = document.getElementById("fname"),
  lname = document.getElementById("lname"),
  duties = document.getElementById("duties");
}




var closebtns = document.getElementsByClassName("close");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}

