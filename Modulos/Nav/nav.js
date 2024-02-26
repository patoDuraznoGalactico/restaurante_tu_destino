
function openNav(){
  document.getElementById("hidden-nav").classList.add("show");
  document.getElementById("menuH-img").style.display = `none`;
  document.getElementById("menuX-img").style.display = `flex`;
}
function closeNav(){
  document.getElementById("hidden-nav").classList.remove("show");
  document.getElementById("menuH-img").style.display = `flex`;
  document.getElementById("menuX-img").style.display = `none`;
}
