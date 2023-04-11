const sectionCount = document.getElementsByClassName("sections").length

let currentSection = 0

let currenLocation = String(window.location)
currentSection = currenLocation.split("#")[1]

refreshSection()

let inject = document.createElement("script")
inject.src = "scripts/inject.js"
document.body.appendChild(inject)
document.body.removeChild(document.body.lastChild)


function refreshSection() {
    for(let i = 0; i < sectionCount; i++) {
        document.getElementById("section" + i).style.zIndex = "1"
    }
    if(currentSection > 0) {
        document.getElementById("section" + currentSection % sectionCount).style.zIndex = "10"
    } else {
        document.getElementById("section0").style.zIndex = "10"
    }
}


window.addEventListener("hashchange", () => {
    let currenLocation = String(window.location)
    currentSection = currenLocation.split("#")[1]
    refreshSection()
})