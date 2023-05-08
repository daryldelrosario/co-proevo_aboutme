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

// HEADER SECTION
const header = $("header");
const headingLines = $(".heading-line");
const aboutMe = $(".about-me");
const solidFill = $(".solid-fill");

// HOBBIES AND EXPERIENCES SECTION
const body = $("body");
const waveGradient = $("#myGradient");
const stops = $("stop", waveGradient);
const slideBorders = $(".slide");

// ACHIEVEMENTS SECTION
const achievements = $(".achievements");
const achievementsItem = $(".achievements__item");
const overlays = $(".achievements__item-overlay");

// GOALS SECTION
const icon = $(".goals__icon i");
const goalsContainer = $(".goals-container");

// FOOTER SECTION
const footerIcons = $('.footer i');
const toTopBtn = $('.back-to-top');

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

}, 1000); // Update every second (1000 milliseconds)

//=============================
//FOR INTERSECTION OBSERVER API
//=============================
// DOM ELEMENTS TO MANIPULATE FOR INTERESECTION OBSERVER API
const headers = $(".move-header");
const objects = $(".move-object");

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

// HELPER FUNCTION: REMOVE FOCUSED INPUT STYLES
function removeFocusedStyle(index, element) {
    promptNodes.eq(index).text("");
    promptNodes.eq(index).removeClass("error-message success-message");

    element.removeClass("error-border success-border");
}

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

// FUNCTION: CLEAR FORM
function clearForm() {
    removeAllStyles();
    fname.val("");
    lname.val("");
    email.val("");
    message.val("");  
}

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

// ============================
// FOR LIST SORTER - PROJECT 13
// ============================
// INTERACTION: HIDDEN EXTRAS BUTTON IN GOALS SECTION OVERLAY
const hiddenText = $(".btn-extra__hidden");
const extrasText = $(".btn-extra__extras");

$(".btn-extra").hover(
    function() {
        hiddenText.fadeOut(100, function() {
            extrasText.fadeIn(100);
        });
    },
    function() {
        extrasText.fadeOut(100, function() {
            hiddenText.fadeIn(100);
        });
    }
);


// SETTING UP THE TABLE WITH PRESET DATA
// FUNCTION: PRESET ROW
function presetRow(fname, lname, age) {
    const row = $("<tr>");
    const fnameCell = $("<td>").text(fname);
    const lnameCell = $("<td>").text(lname);
    const ageCell = $("<td>").text(age);
    ageCell.css("text-align", "right");
    row.append(fnameCell, lnameCell, ageCell);

    $("#list-sorter-table tbody").append(row);
}

// Preset the table with some data
presetRow("Daryl", "del Rosario", 36);
presetRow("Clark Kent", "del Rosario", 1);
presetRow("Ashley", "Martins Pimentel", 35);
presetRow("Aqua", "Man", 10);
presetRow("Cat", "Woman", 2);
presetRow("Hello", "World", 20);

// FUNCTION: ADD ROW
function addRow() {
    const firstName = $("#firstName").val();
    const lastName = $("#lastName").val();
    const age = $("#age").val();

    const row = $("<tr>");
    const fNameCell = $("<td>").text(firstName);
    const lNameCell = $("<td>").text(lastName);
    const ageCell = $("<td>").text(age);
    row.append(fNameCell, lNameCell, ageCell);

    $("#list-sorter-table tbody").append(row);

    $("#firstName").val("");
    $("#lastName").val("");
    $("#age").val("");
}

// FUNCTION: CLEAR TABLE
function clearTable() {
    $("#list-sorter-table tbody tr:not(:first-child)").remove();
}

// CREATING SORTING FUNCTION sortTable(a, b, c)
// FUNCTION: SORT TABLE 
function sortTable(table, columnIndex, isNumeric) {
    const rows = table.find("tbody > tr").get();
    rows.sort(function(a, b) {
        const cellA = $(a).find("td").eq(columnIndex).text();
        const cellB = $(b).find("td").eq(columnIndex).text();
        if(isNumeric) {
            return Number(cellA) - Number(cellB);
        } else {
            return cellA.localeCompare(cellB);
        }
    });

    const currentOrder = $(table.find("th").get(columnIndex)).attr("data-order");
    if(currentOrder === "asc") {
        rows.reverse();
        $(table.find("th").get(columnIndex)).attr("data-order", "desc");
    } else {
        $(table.find("th").get(columnIndex)).attr("data-order", "asc");
    }

    $.each(rows, function(index, row) {
        table.children("tbody").append(row);
    });
}

// Adding click event handlers to the table headers for sorting 
$("#list-sorter-table th").click(function() {
    const table = $(this).closest("table");
    const columnIndex = $(this).index();
    const isNumeric = columnIndex === 2;
    sortTable(table, columnIndex, isNumeric);
});