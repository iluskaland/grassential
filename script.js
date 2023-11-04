let button = document.querySelector(".navbar-toggler");
let headerVideo = document.querySelector("#header-video");
let containerSlide = document.querySelector("#container-slide");
let navbar = document.querySelector(".navbar");

button.addEventListener("click", function() {
let ariaExpanded = button.getAttribute("aria-expanded");

if (ariaExpanded === "true") {
    // Set a different 'top' value when the navbar is expanded
    headerVideo.style.top = "0px";
    containerSlide.style.top = "0px";
    navbar.style.backgroundColor = "rgba(131, 93, 46, 0.6)";
} else {
    // Set the default 'top' value when the navbar is collapsed
    headerVideo.style.top = "-70px";
    containerSlide.style.top = "-70px";
    navbar.style.backgroundColor = "rgba(35, 88, 123, 0.2)";
}
});