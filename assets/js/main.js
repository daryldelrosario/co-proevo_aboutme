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
// FOR D3 TIMELINE - PROJECT 12
// ============================
// DOM ELEMENT STYLING
const modalBody = $(".dthree-body");
modalBody.css({
    "display": "flex",
    "justify-content": "center",
    "align-items": "center",
});

// Define the data for the timeline
const data = [
    { date: "1986-12-04", event: "Birth", thumbnail: "assets/img/1986_mom.jpg" },
    { date: "1992-03-11", event: "Brother's birth", thumbnail: "assets/img/1992_brother.jpg" },
    { date: "2007-09-04", event: "DNA first meet", thumbnail: "assets/img/2007_dna.jpg" },
    { date: "2010-06-01", event: "Philippines", thumbnail: "assets/img/2010_lola.jpg" },
    { date: "2017-07-03", event: "DNA wedding", thumbnail: "assets/img/2017_dna.jpg" },
    { date: "2021-11-24", event: "Birth of first son", thumbnail: "assets/img/2021_cad.jpg" }
];

// Define the dimensions and margins of the visualization
const margin = { top: 20, right: 30, bottom: 30, left: 30 };
const width = 800 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

// Parse the date/time values
const parseTime = d3.timeParse("%Y-%m-%d");

// Create the x-scale for the timeline
const x = d3.scaleTime()
    .domain([parseTime("1986-12-04"), new Date()])
    .range([0, width - 100]);

// Create the SVG container for the visualization
const svg = d3.select("#timeline")
    .append("svg")
    .attr("class", "timeline-svg") // add class
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


// Add the timeline axis
svg.append("g")
    .attr("transform", "translate(0," + height / 2 + ")")
    .call(d3.axisBottom(x)
        .tickSize(0)
        .tickPadding(10));

// Add the timeline events and thumbnails
svg.selectAll(".event")
    .data(data)
    .enter().append("g")
    .attr("class", "event")
    .attr("transform", function (d) { return "translate(" + x(parseTime(d.date)) + "," + height / 2 + ")"; })
    .append("circle")
    .attr("r", 5)
    .attr("fill", "#333")
    .on("mouseover", function (d) {
        // Add tooltip or other interactive behavior here
    })
    .on("mouseout", function (d) {
        // Remove tooltip or other interactive behavior here
    });

    // Add the thumbnail images
    svg.selectAll(".thumbnail")
    .data(data)
    .enter().append("g")
    .attr("class", "thumbnail")
    .attr("transform", function (d) { return "translate(" + (x(parseTime(d.date)) - 15) + "," + (height / 2 + 20) + ")"; })
    .append("image")
    .attr("xlink:href", function (d) { return d.thumbnail; })
    .attr("width", 30)
    .attr("height", 30)
    .attr("x", -2) // add this line to center the image underneath the year label
    .on("mouseover", function (d) {
       //
    })
    .on("mouseout", function (d) {
        //
    });





// Add the year labels
svg.selectAll(".year-label")
    .data(data)
    .enter().append("g")
    .attr("class", "year-label")
    .attr("transform", function (d) { return "translate(" + x(parseTime(d.date)) + "," + (height / 2 - 20) + ")"; })
    .append("rect") // Add a rect behind the text
    .attr("width", 30)
    .attr("height", 20)
    .attr("x", -15)
    .attr("y", -10)
    .attr("opacity", 0) // Make the rect transparent
    .on("mouseover", function (d) {
        //
    })
    .on("mouseout", function (d) {
        //
    })
    .merge(svg.selectAll(".year-label rect")) // Merge the rect selection with the existing one
    .transition()
    .duration(1000)
    .attr("transform", function (d) { return "translate(" + x(parseTime(d.date)) + "," + (height / 2 - 20) + ")"; });

svg.selectAll(".year-label")
    .append("text")
    .text(function (d) { return new Date(d.date).getFullYear(); })
    .attr("text-anchor", "middle")
    .attr("font-size", "12px")
    .attr("fill", "#999");

