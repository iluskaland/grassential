let toggler = document.querySelector(".navbar-toggler");
let navbar = document.querySelector(".navbar");

toggler.addEventListener("click", function() {
    let ariaExpanded = toggler.getAttribute("aria-expanded");

    if (ariaExpanded === "true") {
        // Set a different 'transform' value when the navbar is expanded
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    } else {
        navbar.style.backgroundColor = "rgba(35, 88, 123, 0.2)";
    }
});