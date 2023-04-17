let repos = []

const xhr = new XMLHttpRequest()
xhr.open("GET", "https://api.github.com/users/thebaum123/repos")
xhr.send()
xhr.responseType = "json"
xhr.onload = () => {
    if(xhr.status = 200) {
        repos = xhr.response
        addProjects()
    }
}

function addProjects() {
    const startIndex = randomStart()
    repos.slice(startIndex, startIndex + 3).forEach((item, index, arr) => {
        const newLink = document.createElement("a")
        const repoLinkName = document.createTextNode(item.full_name)
        let repoLinkDescription = document.createTextNode(item.description)
        if(item.description == null) {
            repoLinkDescription = document.createTextNode("!no description found!")
        }
        const nameLabel = document.createElement("label")
        const descriptionLabel = document.createElement("label")
        const br = document.createElement("br")
        nameLabel.appendChild(repoLinkName)
        descriptionLabel.appendChild(repoLinkDescription)
        newLink.appendChild(nameLabel)
        newLink.appendChild(br)
        newLink.appendChild(descriptionLabel)
        newLink.href = `https://github.com/${item.full_name}`
        document.getElementById("projects-container").appendChild(newLink)
    })
}

function randomStart() {
    const randomIndex = Math.floor((Math.random() * (repos.length - 3)) + 1)
    console.log(randomIndex)
    return(randomIndex)
}