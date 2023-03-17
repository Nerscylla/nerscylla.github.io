const learningID = setInterval(updateLearning, 1000)
let currentLearning = 0
let lightModeActive = localStorage.getItem("lightModeActive")

function init() {
    if(lightModeActive % 2 == 1) {
        document.querySelector(":root").classList.add("light")
    } else {
        document.querySelector(":root").classList.add("not-light")
    }
}

function updateLearning() {
    let learning = ["Web Development", "Blender", "Linux", "Docker"]
    if(currentLearning > (learning.length - 2)) {
        currentLearning = 0
    } else {
        currentLearning++
    }
    document.getElementById("greeting5").innerHTML = learning[currentLearning]
}

function toggleLightmode() {
    document.querySelector(":root").classList.toggle("light")
    document.querySelector(":root").classList.toggle("not-light")
    lightModeActive++
    localStorage.setItem("lightModeActive", lightModeActive)
    if(lightModeActive % 2 == 1) {
        document.getElementById("appearance").setAttribute("name", "moon")
    } else {
        document.getElementById("appearance").setAttribute("name", "sunny")
    }
}