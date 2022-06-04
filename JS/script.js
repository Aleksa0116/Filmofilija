// Zanrovi
function gendrop() {
var x = document.getElementById("genres");
var dropicon = document.getElementById("dropicon");
if (x.style.display === "block") {
  x.style.display = "none";
  dropicon.style.color = "white";
} else {
  x.style.display = "block"
  dropicon.style.color = "black";
}
}

// Pretraga
function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}
