//Nav
let menu_bar = document.querySelector(".fa-bars");
let nav_links = document.querySelector(".main_header_container nav");
let nav_icons = document.querySelector('.main_header_icons');
menu_bar.addEventListener("click",()=>{

    
    let checkingNavClass = nav_links.classList.contains('showNav')
    if(checkingNavClass == false){
        nav_links.classList.add('showNav');
        nav_icons.classList.add('showNav');
    } 
    if(checkingNavClass == true){ 
        nav_links.classList.remove('showNav');
        nav_icons.classList.remove('showNav');
    }
    
})
console.log(menu_bar)



//Product Slider
let thumbnail_image = document.querySelectorAll('.thumbnail_image');
let getThumbnail_images = document.querySelectorAll('.thumbnail_image img');
let preview_image = document.getElementById("active_preview_image");

for (let i = 0; i < getThumbnail_images.length; i++) {
    let getIndividualThumbnail = getThumbnail_images[i];

    getIndividualThumbnail.addEventListener('click', () => {
        let storingThumbnailClick = getIndividualThumbnail;
        preview_image.src = storingThumbnailClick.src;
    });
}

//Product Increment
let qtyValue = document.querySelector('#product_qty')
let incrementBtn = document.querySelector('.product_qty-control-up');
let qtyLimit_msg = document.getElementById("qty-limit");
let productQty_num = document.querySelector(".product_qty-num");
let qtylimit_count = document.querySelector("#qty-limit span");

let Selectprice = document.querySelector('.product_price');
let filterPrice = Selectprice.innerText.replace("$", "").replace(".00", "").trim();
let productPrice = Number(filterPrice);
incrementBtn.addEventListener('click', () => {

    if (qtyValue.value < 5) {
        qtyValue.value = parseInt(qtyValue.value) + 1;

        let FinalIncrementPrice = qtyValue.value * productPrice;
        Selectprice.innerText = `$${FinalIncrementPrice.toFixed(2)}`;

    }
    else {
        qtyLimit_msg.style.display = "block";
        productQty_num.classList.add("product_qty-numQty-limit")
        qtyValue.classList.add('qty-limit-input');
        let count = qtyValue.value;
        qtylimit_count.innerText = count;
    }
})

let decrementBtn = document.querySelector(".product_qty-control-down");
decrementBtn.addEventListener('click', () => {

    if (qtyValue.value > 1) {
        qtyValue.value = parseInt(qtyValue.value) - 1;
        qtyLimit_msg.style.display = "none";
        productQty_num.classList.remove("product_qty-numQty-limit")
        qtyValue.classList.remove('qty-limit-input');

        let decement_filterPrice = Selectprice.innerText.replace("$", "").replace(".00", "").trim();
        let decement_conertPrice = Number(decement_filterPrice)
        let decement_finalPrice = decement_conertPrice - 499;
        Selectprice.innerText = `$${decement_finalPrice.toFixed(2)}`;
    }

});