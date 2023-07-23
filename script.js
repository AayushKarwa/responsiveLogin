const navlogin = document.getElementById("navlogin");
const mydiv = document.getElementById("mydiv");
const closebutton = document.getElementById("closebutton");
closebutton.addEventListener("click", () => {
    // Set the display style of the div to "block" to make it visible
    mydiv.style.display = "none";

// Add a click event listener to the button
navlogin.addEventListener("click", () => {
    // Check the current display style of the div
    const divDisplayStyle = getComputedStyle(mydiv).display;

    // Toggle the display style of the div
    if (divDisplayStyle === "none") {
        mydiv.style.display = "block";
    } else {
        mydiv.style.display = "block";
    }
 
    });
});
