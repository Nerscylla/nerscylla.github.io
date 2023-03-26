const learningID = setInterval(updateLearning, 1000)
const updateCookiesID = setInterval(updateCookies, 1000)
let currentLearning = 0
let lightModeActive = localStorage.getItem("lightModeActive")
let cookiesEnabled = localStorage.getItem("cookiesEnabled")

function init() {
    document.getElementById("storedCookies").hidden = true
    document.getElementById("cookiePrompt").hidden = true
    if(cookiesEnabled) {
        if(lightModeActive % 2 == 1) {
            document.querySelector(":root").classList.add("light")
            document.getElementById("gh-contribs").style.filter = "invert(0)"
        } else {
            document.querySelector(":root").classList.add("not-light")
            document.getElementById("gh-contribs").style.filter = "invert(1)"
        }
        document.getElementById("cookiePrompt").style.zIndex = -1
        document.getElementById("enableCookies").hidden = true
        document.getElementById("disableCookies").hidden = true
        document.getElementById("cookiePromptLabel").hidden = true
        document.getElementById("removeCookies").hidden = false
    } else {
        document.getElementById("cookiePrompt").style.zIndex = 1000000
        document.getElementById("enableCookies").hidden = false
        document.getElementById("disableCookies").hidden = false
        document.getElementById("cookiePromptLabel").hidden = false
        document.getElementById("removeCookies").hidden = true
    }
    chuckJoke()
}

function chuckJoke() {
    const chuckNorrisJoke = new XMLHttpRequest()
    chuckNorrisJoke.open("GET", "https://api.chucknorris.io/jokes/random")
    chuckNorrisJoke.send()
    chuckNorrisJoke.responseType = "json"
    chuckNorrisJoke.onload = () => {
        if(chuckNorrisJoke.status == 200) {
            document.getElementById("chuck-joke").innerHTML = chuckNorrisJoke.response.value
        } else {
            document.getElementById("chuck-joke").innerHTML = "API cant be reached for some reson :("
        }
    }
}

/* random collection of api requests and links if I ever want to use them:
http://jservice.io/
https://alexwohlbruck.github.io/cat-facts/
https://api.adviceslip.com/
http://www.boredapi.com/

function numberFact() {
    const randomNumberFact = new XMLHttpRequest
    randomNumberFact.open("GET", "http://numbersapi.com/random/trivia")
    randomNumberFact.send()
    randomNumberFact.responseType = "text"
    randomNumberFact.onload = () => {
        if(randomNumberFact.status == 200) {
            return(randomNumberFact.response)
        } else {
            return("Sorry, but sadly the API can't be reached at the Moment :(")
        }
    }
}

function randomJoke() {
    const randomJoke = new XMLHttpRequest
    randomJoke.open("GET", "https://v2.jokeapi.dev/joke/Any?format=txt&type=single")
    randomJoke.send()
    randomJoke.responseType = "text"
    randomJoke.onload = () => {
        if(randomJoke.status == 200) {
            return(randomJoke.response)
        } else {
            return("Sorry, but sadly the API can't be reached at the Moment :(")
        }
    }
}
*/

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
        if(cookiesEnabled) {
        localStorage.setItem("lightModeActive", lightModeActive)
        if(lightModeActive % 2 == 1) {
            document.getElementById("appearance").setAttribute("name", "moon")
            document.getElementById("gh-contribs").style.filter = "invert(0)"
        } else {
            document.getElementById("appearance").setAttribute("name", "sunny")
            document.getElementById("gh-contribs").style.filter = "invert(1)"
        }
    }
}

function enableCookies() {
    cookiesEnabled = true
    localStorage.setItem("cookiesEnabled", true)
    document.getElementById("cookiePrompt").style.zIndex = -1
    document.getElementById("enableCookies").hidden = true
    document.getElementById("disableCookies").hidden = true
    document.getElementById("cookiePromptLabel").hidden = true
    localStorage.setItem("lightModeActive", 0)
}

function disableCookies() {
    cookiesEnabled = false
    localStorage.clear()
    document.getElementById("cookiePrompt").style.zIndex = -1
    document.getElementById("enableCookies").hidden = true
    document.getElementById("disableCookies").hidden = true
    document.getElementById("cookiePromptLabel").hidden = true
}

function updateCookies() {
    if(localStorage.getItem("cookiesEnabled")) {
        document.getElementById("storedCookies").hidden = false
        document.getElementById("storedCookies").innerHTML = "Light Mode Active: " + localStorage.getItem("lightModeActive") + ", Cookies enabled: " + localStorage.getItem("cookiesEnabled")
    } else {
        document.getElementById("storedCookies").hidden = true
    }
}