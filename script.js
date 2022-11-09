const acc = document.getElementsByClassName("accordion");
const accordions = document.querySelectorAll(".accordion");
const box = document.querySelector(".illustration-box-desktop");
let i;

for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function() {
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
         this.classList.toggle("accordion-active")
         panel.style.display = "none";
      } else {
         this.classList.toggle("accordion-active")
         panel.style.display = "block"
      }
   })
}

accordions.forEach((accordion) => {
   accordion.addEventListener("mouseover", () => {
   box.classList.toggle("transform-active")
   });
   accordion.addEventListener("mouseout", () => {
      box.classList.toggle("transform-active")
      });
});


/* TODO
      position panel-left images
      box animation when hovering on .accordion
      mobile design
*/