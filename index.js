var modal = document.getElementsByClassName("modal")[0];
var modalContent = document.getElementsByClassName("modalContent")[0];
var close = document.getElementsByClassName("close")[0];

setTimeout (function(){
  modal.style.display = "block";
}, 3000);

close.onclick = function(){
  modal.style.display = "none";
}
