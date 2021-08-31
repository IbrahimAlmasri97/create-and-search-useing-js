function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

const addBtn = document.getElementById('add')

addBtn.onclick=function(){    
var Firstname = document.getElementById("Firstname").value;
var country = document.getElementById("country").value;
if(Firstname==""|| country == "" ){
    alert("Firstname and country null ");
}else
{
$('#header').after("<tr><td>"+ Firstname + "</td><td>"+ country +"</td></tr>")
document.getElementById("Firstname").value="";
document.getElementById("country").value="";


}
}
