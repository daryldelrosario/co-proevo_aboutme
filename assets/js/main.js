//=================
//FOR COLOUR TOGGLE
//=================
// DOM VARIABLES FOR COLOR-TOGGLE FUNCTION
const primary = "#eb4637";
const secondary = "#ffbc47";
const primaryDark = "#2c786c";
const secondaryDark = "#594d9c";
const primaryGradient = "linear-gradient(to right, rgba(235, 70, 55, 0.95), rgba(255, 188, 71, 0.95))";
const darkGradient = "linear-gradient(to right, rgba(90, 77, 156, 0.95), rgba(44, 120, 109, 0.95))";
const primaryGoal = "rgba(235, 70, 55, 0.98)";
const primaryGoalP = "rgba(235, 70, 55, 0.77)";
const darkGoal = "rgba(44, 120, 108, 0.98)";
const darkGoalP = "rgba(44, 120, 108, 0.77)";

// NAV SECTION
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-link");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

// HEADER SECTION
const header = document.querySelector("header");
const headingLines = document.querySelectorAll(".heading-line");
const aboutMe = document.querySelector(".about-me");
const solidFill = document.querySelector(".solid-fill");

// HOBBIES AND EXPERIENCES SECTION
const body = document.querySelector("body");
const waveGradient = document.getElementById("myGradient");
const stops = waveGradient.getElementsByTagName("stop");
const slideBorders = document.querySelectorAll(".slide");

// ACHIEVEMENTS SECTION
const achievements = document.querySelector(".achievements");
const achievementsItem = document.querySelectorAll(".achievements__item");
const overlays = document.querySelectorAll(".achievements__item-overlay");

// GOALS SECTION
const icon = document.querySelector(".goals__icon i");
const goalsContainer = document.querySelector(".goals-container");

// FOOTER SECTION
const footerIcons = document.querySelectorAll('.footer i');
const toTopBtn = document.querySelector('.btn-primary');

// SETTING LOADED PROPERTIES
aboutMe.style.setProperty("--about-me-after-bg-color", primary);
headingLines.forEach(headingLine => {
    headingLine.style.setProperty("--heading-line-color", primary);
});
slideBorders.forEach(slide => {
    slide.style.setProperty("--slide-border", `7px ${primary} ridge`);
});
icon.style.background = primaryGradient;
icon.style.setProperty("--icon-boxshadow-hover-color", primary);
goalsContainer.style.setProperty("--goal-overlay-color", primaryGoal);
goalsContainer.style.setProperty("--goal-p-overlay-color", primaryGoalP);
toTopBtn.style.setProperty("--bs-btn-bg", primary);
toTopBtn.style.setProperty("--bs-btn-border-color", primary);
toTopBtn.style.setProperty("--bs-btn-hover-border-color", primaryDark);
toTopBtn.style.setProperty("--bs-btn-hover-bg", primaryDark);

// FUNCTION: toggle between dark-mode and light-mode
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
        headingLines.forEach(headingLine => {
            headingLine.style.setProperty("--heading-line-color", primaryDark);
        });
        solidFill.setAttribute("fill", secondaryDark);
        stops[0].setAttribute("stop-color", primaryDark);
        stops[1].setAttribute("stop-color", secondaryDark);
        slideBorders.forEach(slide => {
            slide.style.setProperty("--slide-border", `7px ${primaryDark} ridge`);
        });
        icon.style.background = darkGradient;
        icon.style.setProperty("--icon-boxshadow-hover-color", primaryDark);
        goalsContainer.style.setProperty("--goal-overlay-color", darkGoal);
        goalsContainer.style.setProperty("--goal-p-overlay-color", darkGoalP);
        footerIcons.forEach(icon => {
            icon.style.color = primaryDark;
        });
        toTopBtn.style.setProperty("--bs-btn-bg", primaryDark);
        toTopBtn.style.setProperty("--bs-btn-border-color", primaryDark);
        toTopBtn.style.setProperty("--bs-btn-hover-border-color", primary);
        toTopBtn.style.setProperty("--bs-btn-hover-bg", primary);
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
        headingLines.forEach(headingLine => {
            headingLine.style.setProperty("--heading-line-color", primary);
        });
        solidFill.setAttribute("fill", secondary);
        stops[0].setAttribute("stop-color", primary);
        stops[1].setAttribute("stop-color", secondary);
        slideBorders.forEach(slide => {
            slide.style.setProperty("--slide-border", `7px ${primary} ridge`);
        });
        icon.style.background = primaryGradient;
        icon.style.setProperty("--icon-boxshadow-hover-color", primary);
        goalsContainer.style.setProperty("--goal-overlay-color", primaryGoal);
        goalsContainer.style.setProperty("--goal-p-overlay-color", primaryGoalP);
        footerIcons.forEach(icon => {
            icon.style.color = primary;
        });
        toTopBtn.style.setProperty("--bs-btn-bg", primary)
        toTopBtn.style.setProperty("--bs-btn-border-color", primary);
        toTopBtn.style.setProperty("--bs-btn-hover-border-color", primaryDark);
        toTopBtn.style.setProperty("--bs-btn-hover-bg", primaryDark);
    }
}

darkModeToggle.addEventListener("click", darkMode);

// =====================
// FOR JAVA SCRIPT TIMER 
// =====================
// DOM VARIABLES FOR JAVASCRIPT TIMER
const myStartDate = "August 1, 2021 00:00:00"; // Learn to code start date
const calcStartDate = new Date(myStartDate).getTime();
const startedCoding = document.getElementById("started-coding-container");
const yearBox = document.getElementById("year-js");
const dayBox = document.getElementById("day-js");
const hourBox = document.getElementById("hour-js");
const minBox = document.getElementById("minute-js");
const secondsBox = document.getElementById("second-js");
const yearCaption = document.getElementById("year-text");
const dayCaption = document.getElementById("day-text");
const hourCaption = document.getElementById("hour-text");
const minCaption = document.getElementById("minute-text");
const secondsCaption = document.getElementById("second-text");


// Time conversion to milliseconds
const msYear = 1000 * 60 * 60 * 24 * 365;
const msDay = 1000 * 60 * 60 * 24;
const msHour = 1000 * 60 * 60;
const msMinute = 1000 * 60
const msSecond = 1000;

// Update timer every second
const timer = setInterval(function() {
    const now = new Date().getTime();
    const passedTime = now - calcStartDate;

    // Convert passedTime to years, days, hours, minutes and seconds
    const years = Math.floor(passedTime / (msYear));
    const days = Math.floor((passedTime % msYear) / msDay);
    const hours = Math.floor((passedTime % msDay) / msHour);
    const minutes = Math.floor((passedTime % msHour) / msMinute);
    const seconds = Math.floor((passedTime % msMinute) / msSecond);

    yearBox.textContent = years;
    dayBox.textContent = days;
    hourBox.textContent = hours;
    minBox.textContent = minutes;
    secondsBox.textContent = seconds;

    if(years <= 1) {
        yearCaption.textContent = "Year";
    } else {
        yearCaption.textContent = "Years";
    }

    if(days <= 1) {
        dayCaption.textContent = "Day";
    } else {
        dayCaption.textContent = "Days";
    }

    if(hours <= 1) {
        hourCaption.textContent = "Hour";
    } else {
        hourCaption.textContent = "Hours";
    }

    if(minutes <= 1) {
        minCaption.textContent = "Minute";
    } else {
        minCaption.textContent = "Minutes";
    }

    if(seconds <= 1) {
        secondsCaption.textContent = "Second";
    } else {
        secondsCaption.textContent = "Seconds";
    }
}, 1000); // Update every second (1000 milliseconds)

//=============================
//FOR INTERSECTION OBSERVER API
//=============================
// DOM ELEMENTS TO MANIPULATE FOR INTERESECTION OBSERVER API
