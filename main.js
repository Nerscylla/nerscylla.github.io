const learningID = setInterval(updateLearning, 1000)
const updateCookiesID = setInterval(updateCookies, 1000)
let currentLearning = 0
let lightModeActive = localStorage.getItem("website:lightModeActive")
let cookiesEnabled = localStorage.getItem("website:cookiesEnabled")

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
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "https://api.chucknorris.io/jokes/random")
    xhr.send()
    xhr.responseType = "json"
    xhr.onload = () => {
        if(xhr.status == 200) {
            document.getElementById("api").innerHTML = xhr.response.value
            document.getElementById("api-heading").innerHTML = "Random Chuck Norris joke for funsies and learning how to make API Requests:"
        } else {
            document.getElementById("api").innerHTML = "API cant be reached for some reson :("
        }
    }
}

/* random collection of api links if I ever want to use them:
http://jservice.io/
http://www.boredapi.com/api/activity
https://www.boredapi.com/api/activity?price=0
*/

function numberFact() {
    const xhr = new XMLHttpRequest
    xhr.open("GET", "http://numbersapi.com/random/trivia")
    xhr.send()
    xhr.responseType = "text"
    xhr.onload = () => {
        if(xhr.status == 200) {
            document.getElementById("api").innerHTML = xhr.response
            document.getElementById("api-heading").innerHTML = "Random number Fact for funsies and learning how to make API Requests:"
        } else {
            document.getElementById("api").innerHTML = "API cant be reached for some reson :("
        }
    }
}

function randomJoke() {
    const xhr = new XMLHttpRequest
    xhr.open("GET", "https://v2.jokeapi.dev/joke/Any?format=txt&type=single")
    xhr.send()
    xhr.responseType = "text"
    xhr.onload = () => {
        if(xhr.status == 200) {
            document.getElementById("api").innerHTML = xhr.response
            document.getElementById("api-heading").innerHTML = "Random joke for funsies and learning how to make API Requests:"
        } else {
            document.getElementById("api").innerHTML = "API cant be reached for some reson :("
        }
    }
}

function randomAdvice() {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "https://api.adviceslip.com/advice")
    xhr.send()
    xhr.responseType = "json"
    xhr.onload = () => {
        if(xhr.status == 200) {
            document.getElementById("api").innerHTML = xhr.response.slip.advice
            document.getElementById("api-heading").innerHTML = "Random life advice for funsies and learning how to make API Requests:"
        } else {
            document.getElementById("api").innerHTML = "API cant be reached for some reson :("
        }
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
    localStorage.setItem("website:cookiesEnabled", true)
    document.getElementById("cookiePrompt").style.zIndex = -1
    document.getElementById("enableCookies").hidden = true
    document.getElementById("disableCookies").hidden = true
    document.getElementById("cookiePromptLabel").hidden = true
    localStorage.setItem("website:lightModeActive", 0)
}

function disableCookies() {
    cookiesEnabled = false
    localStorage.removeItem("website:cookiesEnabled")
    localStorage.removeItem("website:lightModeActive")
    document.getElementById("cookiePrompt").style.zIndex = -1
    document.getElementById("enableCookies").hidden = true
    document.getElementById("disableCookies").hidden = true
    document.getElementById("cookiePromptLabel").hidden = true
}

function updateCookies() {
    if(localStorage.getItem("website:cookiesEnabled")) {
        document.getElementById("storedCookies").hidden = false
        document.getElementById("storedCookies").innerHTML = "Light Mode Active: " + localStorage.getItem("lightModeActive") + ", Cookies enabled: " + localStorage.getItem("cookiesEnabled")
    } else {
        document.getElementById("storedCookies").hidden = true
    }
}