// NAVBAR TOGGLER FOR SMALL SCREEN
let toggler = document.querySelector(".navbar-toggler");
let navbar = document.querySelector(".navbar");

toggler.addEventListener("click", function () {
    let ariaExpanded = toggler.getAttribute("aria-expanded");

    if (ariaExpanded === "true") {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    } else {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    }
});

// MOUSE EVENT FOR THE CARDS
var cards = document.querySelectorAll('.card');

cards.forEach(function (card) {
    card.addEventListener('mousedown', function () {
        this.classList.toggle('active');
    });
});
