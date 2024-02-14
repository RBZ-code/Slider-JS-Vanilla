
const items = document.querySelectorAll(".slider-content-items");
const nbitems = items.length; 
const next = document.querySelector(".btn-slider-right");
const previous = document.querySelector(".btn-slider-left");
const slideTitle = document.querySelectorAll("h3");
console.log(slideTitle);

let compteur = 0; 


const slideNext = () => {
   
    items[compteur].style.animation =
        "slideAnimationRight2 ease-in-out 800ms forwards";

   
    setTimeout(() => {
        items[compteur].classList.remove("active");
        if (compteur < nbitems - 1) {
            compteur++;
        } else {
            compteur = 0;
        }

        slideTitle[compteur].textContent = "Slider " + (compteur + 1);

        items[compteur].style.animation =
            "slideAnimationRight ease-in-out 800ms";

        items[compteur].classList.add("active");
    }, 400);
};


next.addEventListener("click", slideNext);


const slidePrevious = () => {
  
    items[compteur].style.animation =
        "slideAnimationleft2 ease-in-out 800ms forwards";

   
    setTimeout(() => {
        items[compteur].classList.remove("active");
        if (compteur < nbitems - 1) {
            compteur++;
        } else {
            compteur = 0;
        }

        slideTitle[compteur].textContent = "slide " + (compteur + 1);

        items[compteur].style.animation =
            "slideAnimationleft ease-in-out 800ms";

        items[compteur].classList.add("active");
    }, 400);
};


previous.addEventListener("click", slidePrevious);

previous.addEventListener("click", (e) => {
    console.log(e.target);
});