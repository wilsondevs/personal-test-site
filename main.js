const darkMode = document.getElementById("darkMode");
const menu = document.querySelector('.nav');
const sticky = document.querySelector('header');
const menubtn = document.querySelector('.fa-bars');
const cancelbtn = document.querySelector('.cancel-btn');

// close open menu 
menubtn.onclick = () =>{
  menu.classList.add("reveal");
  console.log('works');
}
cancelbtn.onclick = () =>{
  menu.classList.remove("reveal");
  console.log('works');
}
// dark/light mode 
if(localStorage.getItem("theme") == null){
  localStorage.getItem("theme","light");
}


let localData = localStorage.getItem("theme");
if(localData == "light"){
  document.body.classList.remove("darks");
}
else if(localData == "dark"){
  darkMode.classList.toggle("active");
  document.body.classList.add("darks");
}

//this toggles the dark mode
darkMode.onclick = function toggleDark(){
  document.body.classList.toggle("darks");

if(document.body.classList.contains("darks")){
  darkMode.classList.toggle("active");
  localStorage.setItem("theme","dark");
}
else{
  darkMode.classList.toggle("active");
  localStorage.setItem("theme","light");
}
}

//sticky navbar
window.onscroll = () =>{
  this.scrollY >20? sticky.classList.add("sticky") : sticky.classList.remove("sticky");
}