let button = document.querySelector(".navbar-toggler");
let headerVideo = document.querySelector("#header-video");
let containerSlide = document.querySelector("#container-slide");

button.addEventListener("click", function() {
let ariaExpanded = button.getAttribute("aria-expanded");

if (ariaExpanded === "true") {
    // Set a different 'top' value when the navbar is expanded
    headerVideo.style.top = "-230px";
    containerSlide.style.top = "-230px";
} else {
    // Set the default 'top' value when the navbar is collapsed
    headerVideo.style.top = "-70px";
    containerSlide.style.top = "-70px";
}
});