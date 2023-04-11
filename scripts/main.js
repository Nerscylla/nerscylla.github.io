const sectionCount = document.getElementsByClassName("sections").length

let currentSection = 0

let currenLocation = String(window.location)
currentSection = currenLocation.split("#")[1]


window.addEventListener("hashchange", () => {
    let currenLocation = String(window.location)
    currentSection = currenLocation.split("#")[1]
    for(let i = 0; i < sectionCount; i++) {
        document.getElementById("section" + i).style.zIndex = "1"
    }
    console.log("section" + currentSection % sectionCount)
    document.getElementById("section" + currentSection % sectionCount).style.zIndex = "10"
})