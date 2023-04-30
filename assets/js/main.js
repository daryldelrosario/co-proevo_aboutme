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
const nav = $("nav");
const navLinks = $(".nav-link");
const darkModeToggle = $("#dark-mode-toggle");

// const nav = document.querySelector("nav");
// const navLinks = document.querySelectorAll(".nav-link");
// const darkModeToggle = document.querySelector("#dark-mode-toggle");

// HEADER SECTION
const header = $("header");
const headingLines = $(".heading-line");
const aboutMe = $(".about-me");
const solidFill = $(".solid-fill");

// const header = document.querySelector("header");
// const headingLines = document.querySelectorAll(".heading-line");
// const aboutMe = document.querySelector(".about-me");
// const solidFill = document.querySelector(".solid-fill");

// HOBBIES AND EXPERIENCES SECTION
const body = $("body");
const waveGradient = $("#myGradient");
const stops = $("stop", waveGradient);
const slideBorders = $(".slide");

// const body = document.querySelector("body");
// const waveGradient = document.getElementById("myGradient");
// const stops = waveGradient.getElementsByTagName("stop");
// const slideBorders = document.querySelectorAll(".slide");

// ACHIEVEMENTS SECTION
const achievements = $(".achievements");
const achievementsItem = $(".achievements__item");
const overlays = $(".achievements__item-overlay");

// const achievements = document.querySelector(".achievements");
// const achievementsItem = document.querySelectorAll(".achievements__item");
// const overlays = document.querySelectorAll(".achievements__item-overlay");

// GOALS SECTION
const icon = $(".goals__icon i");
const goalsContainer = $(".goals-container");

// const icon = document.querySelector(".goals__icon i");
// const goalsContainer = document.querySelector(".goals-container");

// FOOTER SECTION
const footerIcons = $('.footer i');
const toTopBtn = $('.back-to-top');

// const footerIcons = document.querySelectorAll('.footer i');
// const toTopBtn = document.querySelector('.back-to-top');

// SETTING LOADED PROPERTIES
aboutMe.css("--about-me-after-bg-color", primary);
headingLines.css("--heading-line-color", primary);
slideBorders.css("--slide-border", `7px ${primary} ridge`);

icon.css({
    background: primaryGradient,
    "--icon-boxshadow-hover-color": primary,
});

goalsContainer.css({
    "--goal-overlay-color": primaryGoal, 
    "--goal-p-overlay-color": primaryGoalP,
});

toTopBtn.css({
    "--bs-btn-bg": primary, 
    "--bs-btn-border-color": primary,
    "--bs-btn-hover-border-color": primaryDark,
    "--bs-btn-hover-bg": primaryDark,
});

// aboutMe.style.setProperty("--about-me-after-bg-color", primary);
// headingLines.forEach(headingLine => {
//     headingLine.style.setProperty("--heading-line-color", primary);
// });
// slideBorders.forEach(slide => {
//     slide.style.setProperty("--slide-border", `7px ${primary} ridge`);
// });
// icon.style.background = primaryGradient;
// icon.style.setProperty("--icon-boxshadow-hover-color", primary);
// goalsContainer.style.setProperty("--goal-overlay-color", primaryGoal);
// goalsContainer.style.setProperty("--goal-p-overlay-color", primaryGoalP);
// toTopBtn.style.setProperty("--bs-btn-bg", primary);
// toTopBtn.style.setProperty("--bs-btn-border-color", primary);
// toTopBtn.style.setProperty("--bs-btn-hover-border-color", primaryDark);
// toTopBtn.style.setProperty("--bs-btn-hover-bg", primaryDark);

// FUNCTION: toggle between dark-mode and light-mode
function darkMode(){
    body.toggleClass("dark-body");
    nav.toggleClass("dark-gradient");
    header.toggleClass("dark-gradient");
    aboutMe.toggleClass("dark-border-top");
    achievements.toggleClass("dark-gradient");

    if(body.hasClass("dark-body")) {
        navLinks.each(function() {
            $(this).hover(function() {
                $(this).css("color", primaryDark);
            }, function() {
                $(this).css("color", "");
            });
        });
        aboutMe.css({
            "border-top": `7px solid ${primaryDark}`,
            "--about-me-after-bg-color": primaryDark,
        });
        achievementsItem.css("border-top", `5px solid ${primaryDark}`);
        overlays.css("background-color", "rgba(44, 120, 108, 0.88)");
        headingLines.css("--heading-line-color", primaryDark);
        solidFill.attr("fill", secondaryDark);
        stops.eq(0).attr("stop-color", primaryDark);
        stops.eq(1).attr("stop-color", secondaryDark);
        slideBorders.css("--slide-border", `7px ${primaryDark} ridge`);
        icon.css({
            "background": darkGradient,
            "--icon-boxshadow-hover-color": primaryDark,
        });
        goalsContainer.css({
            "--goal-overlay-color": darkGoal,
            "--goal-p-overlay-color": darkGoalP,
        });
        footerIcons.css("color", primaryDark);
        toTopBtn.css({
            "--bs-btn-bg": primaryDark,
            "--bs-btn-border-color": primaryDark,
            "--bs-btn-hover-border-color": primary,
            "--bs-btn-hover-bg": primary,
        });
    } else {
        navLinks.each(function() {
            $(this).hover(function() {
                $(this).css("color", primary);
            }, function() {
                $(this).css("color", "");
            });
        });
        aboutMe.css({
            "border-top": `7px solid ${primary}`,
            "--about-me-after-bg-color": primary,
        });
        achievementsItem.css("border-top", `5px solid ${primary}`);
        overlays.css("background-color", "rgba(235, 70, 55, 0.88)");
        headingLines.css("--heading-line-color", primary);
        solidFill.attr("fill", secondary);
        stops.eq(0).attr("stop-color", primary);
        stops.eq(1).attr("stop-color", secondary);
        slideBorders.css("--slide-border", `7px ${primary} ridge`);
        icon.css({
            "background": primaryGradient,
            "--icon-boxshadow-hover-color": primary,
        });
        goalsContainer.css({
            "--goal-overlay-color": primaryGoal,
            "--goal-p-overlay-color": primaryGoalP,
        });
        footerIcons.css("color", primary);
        toTopBtn.css({
            "--bs-btn-bg": primary,
            "--bs-btn-border-color": primary,
            "--bs-btn-hover-border-color": primary,
            "--bs-btn-hover-bg": primary,
        });
    }
}

$(darkModeToggle).click(darkMode);

// function darkMode() {
//     body.classList.toggle("dark-body");
//     nav.classList.toggle("dark-gradient");
//     header.classList.toggle("dark-gradient");
//     aboutMe.classList.toggle("dark-border-top");
//     achievements.classList.toggle("dark-gradient");

//     if(aboutMe.classList.contains('dark-border-top')) {
//         navLinks.forEach(link => {
//             link.addEventListener("mouseover", function() {
//                 link.style.color = primaryDark;
//             })
//             link.addEventListener("mouseout", function() {
//                 link.style.color = "";
//             });
//         });
//         aboutMe.style.borderTop = "7px solid " + primaryDark;
//         achievementsItem.forEach(item => {
//             item.style.borderTop = "5px solid " + primaryDark;
//         });
//         aboutMe.style.setProperty("--about-me-after-bg-color", primaryDark);
//         overlays.forEach(overlay => {
//             overlay.style.backgroundColor = `rgba(44, 120, 108, 0.88)`;
//         });
//         headingLines.forEach(headingLine => {
//             headingLine.style.setProperty("--heading-line-color", primaryDark);
//         });
//         solidFill.setAttribute("fill", secondaryDark);
//         stops[0].setAttribute("stop-color", primaryDark);
//         stops[1].setAttribute("stop-color", secondaryDark);
//         slideBorders.forEach(slide => {
//             slide.style.setProperty("--slide-border", `7px ${primaryDark} ridge`);
//         });
//         icon.style.background = darkGradient;
//         icon.style.setProperty("--icon-boxshadow-hover-color", primaryDark);
//         goalsContainer.style.setProperty("--goal-overlay-color", darkGoal);
//         goalsContainer.style.setProperty("--goal-p-overlay-color", darkGoalP);
//         footerIcons.forEach(icon => {
//             icon.style.color = primaryDark;
//         });
//         toTopBtn.style.setProperty("--bs-btn-bg", primaryDark);
//         toTopBtn.style.setProperty("--bs-btn-border-color", primaryDark);
//         toTopBtn.style.setProperty("--bs-btn-hover-border-color", primary);
//         toTopBtn.style.setProperty("--bs-btn-hover-bg", primary);
//     } else {
//         navLinks.forEach(link => {
//             link.addEventListener("mouseover", function() {
//                 link.style.color = primary;
//             })
//             link.addEventListener("mouseout", function() {
//                 link.style.color = "";
//             });
//         });
//         aboutMe.style.borderTop = "7px solid " + primary;
//         achievementsItem.forEach(item => {
//             item.style.borderTop = "5px solid " + primary;
//         });
//         aboutMe.style.setProperty("--about-me-after-bg-color", primary);
//         overlays.forEach(overlay => {
//             overlay.style.backgroundColor = `rgba(235, 70, 55, 0.88)`;
//         });
//         headingLines.forEach(headingLine => {
//             headingLine.style.setProperty("--heading-line-color", primary);
//         });
//         solidFill.setAttribute("fill", secondary);
//         stops[0].setAttribute("stop-color", primary);
//         stops[1].setAttribute("stop-color", secondary);
//         slideBorders.forEach(slide => {
//             slide.style.setProperty("--slide-border", `7px ${primary} ridge`);
//         });
//         icon.style.background = primaryGradient;
//         icon.style.setProperty("--icon-boxshadow-hover-color", primary);
//         goalsContainer.style.setProperty("--goal-overlay-color", primaryGoal);
//         goalsContainer.style.setProperty("--goal-p-overlay-color", primaryGoalP);
//         footerIcons.forEach(icon => {
//             icon.style.color = primary;
//         });
//         toTopBtn.style.setProperty("--bs-btn-bg", primary)
//         toTopBtn.style.setProperty("--bs-btn-border-color", primary);
//         toTopBtn.style.setProperty("--bs-btn-hover-border-color", primaryDark);
//         toTopBtn.style.setProperty("--bs-btn-hover-bg", primaryDark);
//     }
// }

// darkModeToggle.addEventListener("click", darkMode);

// =====================
// FOR JAVA SCRIPT TIMER 
// =====================
// DOM VARIABLES FOR JAVASCRIPT TIMER
const myStartDate = "August 1, 2021 00:00:00"; // Learn to code start date
const calcStartDate = new Date(myStartDate).getTime();
const startedCoding = $("#started-coding-container");
const yearBox = $("#year-js");
const dayBox = $("#day-js");
const hourBox = $("#hour-js");
const minBox = $("#minute-js");
const secondsBox = $("#second-js");
const yearCaption = $("#year-text");
const dayCaption = $("#day-text");
const hourCaption = $("#hour-text");
const minCaption = $("#minute-text");
const secondsCaption = $("#second-text");

// const myStartDate = "August 1, 2021 00:00:00"; // Learn to code start date
// const calcStartDate = new Date(myStartDate).getTime();
// const startedCoding = document.getElementById("started-coding-container");
// const yearBox = document.getElementById("year-js");
// const dayBox = document.getElementById("day-js");
// const hourBox = document.getElementById("hour-js");
// const minBox = document.getElementById("minute-js");
// const secondsBox = document.getElementById("second-js");
// const yearCaption = document.getElementById("year-text");
// const dayCaption = document.getElementById("day-text");
// const hourCaption = document.getElementById("hour-text");
// const minCaption = document.getElementById("minute-text");
// const secondsCaption = document.getElementById("second-text");


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

    yearBox.text(years);
    dayBox.text(days);
    hourBox.text(hours);
    minBox.text(minutes);
    secondsBox.text(seconds);

    yearCaption.text(years <=1 ? "Year" : "Years");
    dayCaption.text(days <=1 ? "Day" : "Days");
    hourCaption.text(hours <=1 ? "Hour" : "Hours");
    minCaption.text(minutes <=1 ? "Minute" : "Minutes");
    secondsCaption.text(seconds <=1 ? "Second" : "Seconds");


    // yearBox.textContent = years;
    // dayBox.textContent = days;
    // hourBox.textContent = hours;
    // minBox.textContent = minutes;
    // secondsBox.textContent = seconds;

    // if(years <= 1) {
    //     yearCaption.textContent = "Year";
    // } else {
    //     yearCaption.textContent = "Years";
    // }

    // if(days <= 1) {
    //     dayCaption.textContent = "Day";
    // } else {
    //     dayCaption.textContent = "Days";
    // }

    // if(hours <= 1) {
    //     hourCaption.textContent = "Hour";
    // } else {
    //     hourCaption.textContent = "Hours";
    // }

    // if(minutes <= 1) {
    //     minCaption.textContent = "Minute";
    // } else {
    //     minCaption.textContent = "Minutes";
    // }

    // if(seconds <= 1) {
    //     secondsCaption.textContent = "Second";
    // } else {
    //     secondsCaption.textContent = "Seconds";
    // }
}, 1000); // Update every second (1000 milliseconds)

// REFACTORED UP TO HERE:
//=============================
//FOR INTERSECTION OBSERVER API
//=============================
// DOM ELEMENTS TO MANIPULATE FOR INTERESECTION OBSERVER API
const headers = $(".move-header");
const objects = $(".move-object");
// const headers = document.querySelectorAll(".move-header");
// const objects = document.querySelectorAll(".move-object");

const options = {
    threshold: 0.5
};

// OBSERVER API VARIABLES
const headerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            $(entry.target).addClass("fade-effect");
        } else {
            $(entry.target).removeClass("fade-effect");
        }
    });
}, options);

const objectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            $(entry.target).addClass("slide-effect");
        } else {
            $(entry.target).removeClass("slide-effect");
        }
    });
}, options);

// APPLICATION OF OBSERVER API ON DOM ELEMENTS
headers.each(function () {
    headerObserver.observe($(this)[0]);
});

objects.each(function () {
    objectObserver.observe($(this)[0]);
});

// =============================
// FOR CONTACT FORM - PROJECT 11
// =============================
// GET ALL NECESSARY DOM ELEMENTS 
const form = $('form');
const modalTitle = $(".modal-title");
const fname = $("#firstName");
const lname = $("#lastName");
const email = $("#email");
const message = $("#message");
const promptNodes = $(".prompt");
const contactButton = $(".start-modal");
const submitButton = $(".submit");
const clearButton = $("#clear-form");
const exitButtons = $(".exit-button");

// const form = document.querySelector('form');
// const modalTitle = document.querySelector(".modal-title");
// const fname = document.querySelector("#firstName");
// const lname = document.querySelector("#lastName");
// const email = document.querySelector("#email");
// const message = document.querySelector("#message");
// const promptNodes = document.querySelectorAll(".prompt");
// const contactButton = document.querySelector(".start-modal");
// const submitButton = document.querySelector(".submit");
// const clearButton = document.querySelector("#clear-form");
// const exitButtons = document.querySelectorAll(".exit-button");

// HELPER FUNCTION: VALIDATE EMAIL
function validateEmail(email) {
    let checkEmail = /\S+@\S+\.\S+/;
    return checkEmail.test(email);
}

// HELPER FUNCTION: ON ERROR
function onError(index, element, promptMessage) {
    promptNodes.eq(index).removeClass("success-message");
    element.removeClass("success-border");
    promptNodes.eq(index).addClass("error-message");
    element.addClass("error-border");
    promptNodes.eq(index).text(promptMessage);
}

// HELPER FUNCTION: ON SUCCESS
function onSuccess(index, element, promptMessage) {
    promptNodes.eq(index).removeClass("error-message");
    element.removeClass("error-border");
    promptNodes.eq(index).addClass("success-message");
    element.addClass("success-border");
    promptNodes.eq(index).text(promptMessage);
}

// HELPER FUNCTION: REMOVE ALL INPUT STYLES
function removeAllStyles() {
    promptNodes.each(function() {
        $(this).text("").removeClass("error-message success-message");
    });

    fname.add(lname).add(email).add(message).removeClass("error-border success-border");
}

// function removeAllStyles() {
//     for(let i = 0; i < promptNodes.length; i++) {
//         promptNodes[i].innerText = "";
//         promptNodes[i].classList.remove("error-message");
//         promptNodes[i].classList.remove("success-message");
//     }

//     fname.classList.remove("error-border");
//     lname.classList.remove("error-border");
//     email.classList.remove("error-border");
//     message.classList.remove("error-border");

//     fname.classList.remove("success-border");
//     lname.classList.remove("success-border");
//     email.classList.remove("success-border");
//     message.classList.remove("success-border");
// }

// HELPER FUNCTION: REMOVE FOCUSED INPUT STYLES
function removeFocusedStyle(index, element) {
    promptNodes.eq(index).text("");
    promptNodes.eq(index).removeClass("error-message success-message");

    element.removeClass("error-border success-border");
}

// function removeFocusedStyle(index, element) {
//     promptNodes[index].innerText = "";
//     promptNodes[index].classList.remove("error-message");
//     promptNodes[index].classList.remove("success-message");

//     element.classList.remove("error-border");
//     element.classList.remove("success-border");
// }

// HELPER FUNCTION: SETUP MODAL
function setupModal() {
    modalTitle.html("Send a Message: ");
    submitButton.show();
    clearButton.show();

    fname.prop("disabled", false);
    lname.prop("disabled", false);
    email.prop("disabled", false);
    message.prop("disabled", false);
}

// function setupModal() {
//     modalTitle.innerHTML = "Send a Message: "
//     submitButton.style.display = "";
//     clearButton.style.display = "";

//     fname.disabled = false;
//     lname.disabled = false;
//     email.disabled = false;
//     message.disabled = false;
// }

// FUNCTION: VALIDATE DATA
function validateForm() {
    if(fname.val().length < 1) {
        onError(0, fname, "*first name is required");
    } else {
        onSuccess(0, fname, "✔");
    }

    if(lname.val().length < 1) {
        onError(1, lname, "*last name is required");
    } else {
        onSuccess(1, lname, "✔");
    }

    if(email.val().length < 1) {
        onError(2, email, "*email is required");
    } else if(!validateEmail(email.val())) {
        onError(2, email, "*invalid email address");
    } else {
        onSuccess(2, email, "✔");
    }

    if(message.val().length < 1) {
        onError(3, message, "*message is required");
    } else {
        onSuccess(3, message, "✔");
    }
}

// function validateForm() {

//     if(fname.value.length < 1) {
//         onError(0, fname, "*first name is required");
//     } else {
//         onSuccess(0, fname, "✔");
//     }

//     if(lname.value.length < 1) {
//         onError(1, lname, "*last name is required");
//     } else {
//         onSuccess(1, lname, "✔");
//     }

//     if(email.value.length < 1) {
//         onError(2, email, "*email is required");
//     } else if(!validateEmail(email.value)) {
//         onError(2, email, "*invalid email address");
//     } else {
//         onSuccess(2, email, "✔");
//     }

//     if(message.value.length < 1) {
//         onError(3, message, "*message is required");
//     } else {
//         onSuccess(3, message, "✔");
//     }
// }

// FUNCTION: CLEAR FORM
function clearForm() {
    removeAllStyles();
    fname.val("");
    lname.val("");
    email.val("");
    message.val("");  
}

// function clearForm() {
//     removeAllStyles();

//     fname.value = "";
//     lname.value = "";
//     email.value = "";
//     message.value = "";    
// }

// FUNCTION: HANDLE SUBMIT
function handleSubmit(e){
    e.preventDefault();
    validateForm();

    let hasErrors = false;

    promptNodes.each(function() {
        if($(this).hasClass("error-message")) {
            hasErrors = true;
        }
    });

    if(!hasErrors) {
        modalTitle.text("Message Sent Successfully!");
        submitButton.hide();
        clearButton.hide();

        fname.prop("disabled", true);
        lname.prop("disabled", true);
        email.prop("disabled", true);
        message.prop("disabled", true);
    }
}

// function handleSubmit(e) {
//     e.preventDefault();
//     validateForm();

//     let hasErrors = false;

//     promptNodes.forEach((node) => {
//         if(node.classList.contains("error-message")) {
//             hasErrors = true;
//         }
//     });

//     if(!hasErrors) {
//         modalTitle.innerText = "Message Sent Successfully!";
//         submitButton.style.display = "none";
//         clearButton.style.display = "none";

//         fname.disabled = true;
//         lname.disabled = true;
//         email.disabled = true;
//         message.disabled = true;
//     }
// }

// ADD EVENT LISTENERS

form.on("submit", (e) => handleSubmit(e));
contactButton.on("click", setupModal);
exitButtons.each(function() {
    $(this).click(clearForm);
});
clearButton.on("click", clearForm);
fname.on("input", () => removeFocusedStyle(0, fname));
lname.on("input", () => removeFocusedStyle(1, lname));
email.on("input", () => removeFocusedStyle(2, email));
message.on("input", () => removeFocusedStyle(3, message));

// $(function() {
//     $("#contactButton").click(setupModal);
//     $("#fname").on("input", function() {
//         removeFocusedStyle(0, $(this));
//     });
//     $("#lname").on("input", function() {
//         removeFocusedStyle(1, $(this));
//     });
//     $("#email").on("input", function() {
//         removeFocusedStyle(2, $(this));
//     });
//     $("#message").on("input", function() {
//         removeFocusedStyle(3, $(this));
//     });
//     $("#clearButton").click(clearForm);
//     $(".exit").click(function() {
//         clearForm();
//     });
//     $("#form").submit(function(e) {
//         handleSubmit(e);
//     });
// });

// contactButton.addEventListener("click", setupModal);

// exitButtons.forEach((button) => {
//     button.addEventListener("click", clearForm);
// });

// fname.addEventListener("input", () => removeFocusedStyle(0, fname));
// lname.addEventListener("input", () => removeFocusedStyle(1, lname));
// email.addEventListener("input", () => removeFocusedStyle(2, email));
// message.addEventListener("input", () => removeFocusedStyle(3, message));

// clearButton.addEventListener("click", clearForm);
// form.addEventListener('submit', (e) => handleSubmit(e));