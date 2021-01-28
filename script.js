let hamburgerMenuImg;
let modal;
let closeButton;
function setup (){
    hamburgerMenuImg = document.querySelector(".hamburger-menu img");
    modal = document.querySelector(".modal");
    closeButton = document.querySelector(".modal__close-button");
    closeButton.addEventListener("click",closeSideMenu);
    hamburgerMenuImg.addEventListener("click",openSideMenu);
    modal.addEventListener("click",closeSideMenu);
}

window.addEventListener("load",setup);

function openSideMenu(){
    openModal();
}

function openModal(){
    modal.style.display = "block";
    document.querySelector("body").style.overflow ="hidden";
}

function closeSideMenu(){
    modal.style.display = "none";
    document.querySelector("body").style.overflow ="visible";
}

