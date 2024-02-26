
function openNav(){
  document.getElementById("nav-oculto").classList.add("mostrar");
  document.getElementById("menuH-img").style.display = `none`;
  document.getElementById("menuX-img").style.display = `flex`;
}
function closeNav(){
  document.getElementById("nav-oculto").classList.remove("mostrar");
  document.getElementById("menuH-img").style.display = `flex`;
  document.getElementById("menuX-img").style.display = `none`;
}
