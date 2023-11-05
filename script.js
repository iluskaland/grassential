let toggler = document.querySelector(".navbar-toggler");
let navbar = document.querySelector(".navbar");

toggler.addEventListener("click", function() {
    let ariaExpanded = toggler.getAttribute("aria-expanded");

    if (ariaExpanded === "true") {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    } else {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    }
});