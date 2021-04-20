function addRow() {
      
    var table = document.getElementById("table");
      
    var table = document.createElement('TABLE');
    table.border='1';
    
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
      
    for (var i=0; i<3; i++){
       var tr = document.createElement('TR');
       tableBody.appendChild(tr);
       
       for (var j=0; j<4; j++){
           var td = document.createElement('TD');
           td.width='75';
           td.appendChild(document.createTextNode("Cell " + i + "," + j));
           tr.appendChild(td);
       }
    }
    table.appendChild(table);
    
}
 



function addRow() {
          
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var duties = document.getElementById("duties");
    var table = document.getElementById("table");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="deleteRow(this)">';
    row.insertCell(1).innerHTML= fname.value;
    row.insertCell(2).innerHTML= lname.value;
    row.insertCell(2).innerHTML= duties.value;

 
}

