'use strict';

const dyslexicButtonString = Object.freeze({
    "regular": "Dyslexic?",
    "opendyslexic": "Regular font"
});

function getToggleLink() {
    return document.getElementById("opendyslexic-toggle");
}

function setButtonText(font) {
    const dyslexicToggle = getToggleLink();
    dyslexicToggle.textContent = dyslexicButtonString[font];
    switch (font) {
        case "opendyslexic":
            getToggleLink().classList.remove("opendyslexic");
            getToggleLink().classList.add("forceregular");
            break;
        default:
            getToggleLink().classList.remove("forceregular");
            getToggleLink().classList.add("opendyslexic");
            break;
    }
}

function getFontLocalStorage() {
    return window.localStorage.getItem("font");
}

function setFontLocalStorage(font) {
    window.localStorage.setItem("font", font);
}

function setInitialFontFromLocalStorage() {
    const font = getFontLocalStorage();
    if (font === "opendyslexic") {
        document.getElementsByTagName("body")[0].classList.add("opendyslexic");
        setButtonText("opendyslexic");
    } else if (font == null) {
        setFontLocalStorage("regular");
    }
}

function toggleFont() {
    const body = document.getElementsByTagName("body")[0];
    let newFont = "opendyslexic";
    if (body.classList.contains("opendyslexic"))
        newFont = "regular";

    setFontLocalStorage(newFont);

    switch (newFont) {
        case "opendyslexic":
            document.getElementsByTagName("body")[0].classList.add("opendyslexic");
            break;
        default:
            document.getElementsByTagName("body")[0].classList.remove("opendyslexic");
            break;
    }

    setButtonText(newFont);
}

document.addEventListener('DOMContentLoaded', function () {
    setInitialFontFromLocalStorage();

    const dyslexicToggle = getToggleLink();
    dyslexicToggle.addEventListener("click", toggleFont);
});
