// Open Menu
let menuBar_icon = document.querySelector('.menu-bar');
let navMiddle = document.querySelector("nav .nav-middle");
let navRight = document.querySelector("nav .nav-right");
let menuBar_iconImg = document.querySelector('.menu-bar img'); //menu icon image
let menu_txt = document.querySelector('.menu-bar__txt'); //Menu text

let navCategory_links = document.querySelector(".bottom-nav"); // Tab & Mobile side Nav menu
menuBar_icon.addEventListener("click", () => {
    let crossMenu_icon = "assets/images/svg/icon-cross.svg";
    menuBar_icon.classList.toggle("menu-bar-open");
    let menuBar_open = document.querySelector(".menu-bar-open");
    if(menuBar_open){
        menuBar_iconImg.src = crossMenu_icon;
        menu_txt.style.display = 'inline-block';
        navCategory_links.style.display = 'block';
    } else {
        menuBar_iconImg.src = 'assets/images/svg/icon-bars.svg';
        menu_txt.style.display = 'none';
        navCategory_links.style.display = 'none';
    }
});

// Slide Down Dropdown menu

//Selected link which has dropdown
let slideDropdown_link = document.querySelectorAll(".nav-has__dropdown"); 
let slideDropdown = document.querySelectorAll(".nav-dropdown"); //Selected dropdown 
for(let i = 0; i < slideDropdown_link.length; i++){
    slideDropdown_link[i].addEventListener("click",(e)=>{
        e.preventDefault();
        let checkSlide_dropdown = slideDropdown[i].classList.contains("nav-dropdown__active--open");
        if(checkSlide_dropdown === false){
            slideDropdown[i].classList.add("nav-dropdown__active--open");
        } else {
            slideDropdown[i].classList.remove("nav-dropdown__active--open");
        }
    })
}