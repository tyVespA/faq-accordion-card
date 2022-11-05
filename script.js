const acc = document.getElementsByClassName("accordion")
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

/* TODO
      position panel-left images
      box animation when hovering on .accordion
      mobile design
*/