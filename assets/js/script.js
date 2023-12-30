let mainBody = document.querySelector("body");
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
    if (menuBar_open) {
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
for (let i = 0; i < slideDropdown_link.length; i++) {
    slideDropdown_link[i].addEventListener("click", (e) => {
        e.preventDefault();
        let checkSlide_dropdown = slideDropdown[i].classList.contains("nav-dropdown__active--open");
        if (checkSlide_dropdown === false) {
            slideDropdown[i].classList.add("nav-dropdown__active--open");
        } else {
            slideDropdown[i].classList.remove("nav-dropdown__active--open");
        }
    })
}


// Initialize Swiper
const swiper = new Swiper('.swiper', {
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//   Recent Product 
const recentProducts_swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
      spaceBetween: 10,
      allowTouchMove: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});


// Category filter slide
let filterIcon = document.querySelector(".category-header__right-filter-icon");
let filterClose_Icon = document.querySelector(".filter-close__icon");
let filterSlider = document.querySelector(".category-products__filter");
if(filterIcon){
filterIcon.addEventListener("click",(e)=>{
    filterSlider.classList.add("category-products__filter--active");
});
}
if(filterClose_Icon){
filterClose_Icon.addEventListener("click",()=>{
    filterSlider.classList.remove("category-products__filter--active");
});
}
// Category hide and show
let filterHeader_title = document.querySelectorAll(".category-products__filter-item--header");
let filterBody = document.querySelectorAll(".category-products__filter-item--body")
let filterToggle_icon = document.querySelectorAll(".category-products__filter-item--toggle")
for(let i = 0; i < filterHeader_title.length; i++){
    if(filterHeader_title){
    filterHeader_title[i].addEventListener("click",()=>{
        if( filterToggle_icon[i].style.transform == "rotate(180deg)") {
            filterToggle_icon[i].style.transform = "rotate(0deg)";
            filterBody[i].style.cssText = `
            height: auto; 
            overflow: unset;
            transition: .3s all linear;
          `;
        } else {
            filterToggle_icon[i].style.transform = "rotate(180deg)";
          
          filterBody[i].style.cssText = `
          height: 0; 
          overflow: hidden;
          margin-top:unset;
          transition: .3s all linear;
        `;
        }
       
    });
}
}