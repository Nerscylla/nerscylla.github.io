const sectionCount = document.getElementsByClassName("sections").length
let progressBar = document.getElementById("progress-bar")
let progressPercentage = 0

let currentSection = 0

let currenLocation = String(window.location)
currentSection = currenLocation.split("#")[1]

let inject = document.createElement("script")
inject.src = "scripts/inject.js"
document.body.appendChild(inject)
document.body.removeChild(document.body.lastChild)

progressBar.style.width = 0

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
    progressPercentage = ((parseInt(currentSection) + 1) / (parseInt(sectionCount))) * 100
    progressBar.style.width = `${progressPercentage}%`
}

window.addEventListener("hashchange", () => {
    let currentLocation = String(window.location)
    currentSection = currentLocation.split("#")[1]
    refreshSection()
})