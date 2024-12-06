const meubnt = document.querySelector("#menu-icon");
const navBar = document.querySelector("#nav-bar");


function handleClick() {
    navBar.classList.toggle("hidden"); 
}


meubnt.addEventListener("click", handleClick);