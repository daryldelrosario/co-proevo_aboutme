const primary = "#eb4637";
const secondary = "#ffbc47";
const primaryDark = "#2c786c";
const secondaryDark = "#594d9c";
const primaryGradient = "linear-gradient(to right, rgba(235, 70, 55, 0.95), rgba(255, 188, 71, 0.95))";
const darkGradient = "linear-gradient(to right, rgba(90, 77, 156, 0.95), rgba(44, 120, 109, 0.95))";

// NAV SECTION
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-link");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

// HEADER SECTION
const header = document.querySelector("header");
const headingLine = document.querySelector(".heading-line");
const aboutMe = document.querySelector(".about-me");
const solidFill = document.querySelector(".solid-fill");

// HOBBIES AND EXPERIENCES SECTION
const body = document.querySelector("body");
const waveGradient = document.getElementById("myGradient");
const stops = waveGradient.getElementsByTagName("stop");

// ACHIEVEMENTS SECTION
const achievements = document.querySelector(".achievements");
const achievementsItem = document.querySelectorAll(".achievements__item");
const overlays = document.querySelectorAll(".achievements__item-overlay");

// GOALS SECTION
const icon = document.querySelector(".goals__icon i");

// FOOTER SECTION


aboutMe.style.setProperty("--about-me-after-bg-color", primary);
headingLine.style.setProperty("--heading-line-color", primary);

icon.style.background = primaryGradient;

function darkMode() {
    body.classList.toggle("dark-body");
    nav.classList.toggle("dark-gradient");
    header.classList.toggle("dark-gradient");
    aboutMe.classList.toggle("dark-border-top");
    achievements.classList.toggle("dark-gradient");

    if(aboutMe.classList.contains('dark-border-top')) {
        navLinks.forEach(link => {
            link.addEventListener("mouseover", function() {
                link.style.color = primaryDark;
            })
            link.addEventListener("mouseout", function() {
                link.style.color = "";
            });
        });
        aboutMe.style.borderTop = "7px solid " + primaryDark;
        achievementsItem.forEach(item => {
            item.style.borderTop = "5px solid " + primaryDark;
        });
        aboutMe.style.setProperty("--about-me-after-bg-color", primaryDark);
        overlays.forEach(overlay => {
            overlay.style.backgroundColor = `rgba(44, 120, 108, 0.88)`;
        });
        headingLine.style.setProperty("--heading-line-color", primaryDark);
        solidFill.setAttribute("fill", secondaryDark);
        stops[0].setAttribute("stop-color", primaryDark);
        stops[1].setAttribute("stop-color", secondaryDark);
        icon.style.background = darkGradient;
    } else {
        navLinks.forEach(link => {
            link.addEventListener("mouseover", function() {
                link.style.color = primary;
            })
            link.addEventListener("mouseout", function() {
                link.style.color = "";
            });
        });
        aboutMe.style.borderTop = "7px solid " + primary;
        achievementsItem.forEach(item => {
            item.style.borderTop = "5px solid " + primary;
        });
        aboutMe.style.setProperty("--about-me-after-bg-color", primary);
        overlays.forEach(overlay => {
            overlay.style.backgroundColor = `rgba(235, 70, 55, 0.88)`;
        });
        headingLine.style.setProperty("--heading-line-color", primary);
        solidFill.setAttribute("fill", secondary);
        stops[0].setAttribute("stop-color", primary);
        stops[1].setAttribute("stop-color", secondary);
        icon.style.background = primaryGradient;
    }
}

darkModeToggle.addEventListener("click", darkMode);