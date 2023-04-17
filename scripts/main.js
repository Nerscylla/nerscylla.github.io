const sectionCount = document.getElementsByClassName("sections").length

let currentSection = 0
let lastSection = 0

let currenLocation = String(window.location)
currentSection = currenLocation.split("#")[1]

let inject = document.createElement("script")
inject.src = "scripts/inject.js"
document.body.appendChild(inject)
document.body.removeChild(document.body.lastChild)

refreshSection()

function refreshSection() {
    if(currentSection == undefined) {
        window.location.assign("#0")
        currentSection = 0
    }
    for(let i = 0; i < sectionCount; i++) {
        document.getElementById("section" + i).style.transform = "translateY(-200%)"
        document.getElementById("section" + i).style.zIndex = "0"
    }
    document.getElementById("section" + currentSection).style.transform = "translateY(0)"
    document.getElementById("section" + currentSection).style.zIndex = "10"
}

function nextSection() {
    let nextSection = (parseInt(currentSection, 10) + 1) % sectionCount
    window.location.assign("#" + nextSection)
    document.getElementById("next-button").style.transition = "100ms"
    document.getElementById("next-button").style.transform = "translate(-50%, -50%)"
    setTimeout(() => {
        document.getElementById("next-button").style.transition = "250ms"
        document.getElementById("next-button").style.transform = ""
    }, 100);
}

window.addEventListener("hashchange", () => {
    lastSection = currentSection
    let currenLocation = String(window.location)
    currentSection = currenLocation.split("#")[1]
    refreshSection()
})