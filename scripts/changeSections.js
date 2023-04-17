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

document.addEventListener("touchmove", (e) => {
    if(new Date() - lastScrollTime < 750) {

    } else {
        if(lastTouch < e.changedTouches[0].clientY) {
            nextSection()
        } else if(lastTouch > e.changedTouches[0].clientY) {
            lastSection()
        }
        lastScrollTime = new Date()
    }
    lastTouch = e.changedTouches[0].clientY
})