let difference = 0
let lastTouch = 0
let lastScrollTime = new Date()

function nextSection() {
    let newSection = (parseInt(currentSection, 10) + 1) % sectionCount
    window.location.assign("#" + newSection)
    document.getElementById("next-button").style.transition = "100ms"
    document.getElementById("next-button").style.transform = "translate(-50%, -50%)"
    setTimeout(() => {
        document.getElementById("next-button").style.transition = "250ms"
        document.getElementById("next-button").style.transform = ""
    }, 100);
}

function lastSection() {
    let newSection = (parseInt(currentSection, 10) - 1) % sectionCount
    if(newSection == -1) {
        window.location.assign("#" + (sectionCount - 1))
    } else {
        window.location.assign("#" + newSection)
    }
}

document.addEventListener("wheel", (e) => {
    if(e.deltaY < 0) {
        lastSection()
    } else {
        nextSection()
    }
})

let touchDown = 0
let touchUp = 0

document.addEventListener("pointerdown", e => { touchDown = e.clientY })
document.addEventListener("pointerup", e => {
    touchUp = e.clientY
    processTouch()
})

function processTouch() {
    if(touchDown - touchUp  < 0) lastSection()
    if(touchDown - touchUp > 0) nextSection()
}