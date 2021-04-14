function addHtmlTableRow() {
  var table = document.getElementById("table"),
  newRow = table.insert(table.length),
  cell = newRow.insertCell(0),
  cell = newRow.insertCell(1),
  cell = newRow.insertCell(2),
  fname = document.getElementById("fname").value,
  lname = document.getElementById("lname").value,
  duties = document.getElementById("duties").value;

  cell1.innerHTML = fname;
  cell1.innerHTML = lname;
  cell1.innerHTML = duties;

}

function selectRowToInput();

{ 
  var rindex,table = table.getElementById("table");
for (var i = 0; i < table.row.length; i++)
{
  table.row[i].onclick = function()
  {
    rindex = this.rowindex;
    console.log(rindex);
  };
}
}
selectRowToInput();



var closebtns = document.getElementsByClassName("close");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}
 
