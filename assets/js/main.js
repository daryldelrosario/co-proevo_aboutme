const primary = "#eb4637";
const secondary = "#ffbc47";
const primaryDark = "#2c786c";
const secondaryDark = "#594d9c";

const body = document.querySelector("body");
const nav = document.querySelector("nav");
const header = document.querySelector("header");
const aboutMe = document.querySelector(".about-me");
const solidFill = document.querySelector(".solid-fill");
const waveGradient = document.getElementById("myGradient");
const stops = waveGradient.getElementsByTagName("stop");

const darkModeToggle = document.querySelector("#dark-mode-toggle");

function darkMode() {
    body.classList.toggle("dark-body");
    nav.classList.toggle("dark-gradient");
    header.classList.toggle("dark-gradient");
    aboutMe.classList.toggle("dark-border-top");

    if(aboutMe.classList.contains('dark-border-top')) {
        aboutMe.style.borderTop = "7px solid " + primaryDark;
        aboutMe.style.setProperty("--about-me-after-bg-color", primaryDark);
        solidFill.setAttribute("fill", secondaryDark);
        stops[0].setAttribute("stop-color", primaryDark);
        stops[1].setAttribute("stop-color", secondaryDark);
    } else {
        aboutMe.style.borderTop = "7px solid " + primary;
        aboutMe.style.setProperty("--about-me-after-bg-color", primary);
        solidFill.setAttribute("fill", secondary);
        stops[0].setAttribute("stop-color", primary);
        stops[1].setAttribute("stop-color", secondary);
    }
}

darkModeToggle.addEventListener("click", darkMode);