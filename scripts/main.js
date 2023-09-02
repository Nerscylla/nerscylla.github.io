const reposList = document.getElementById("projects-list")

fetch("https://api.github.com/users/thebaum123/repos")
.then(data => {
    return data.json()
})
.then(repos => {
    repos.sort((a, b) => {
        if(Math.random() > 0.5) {
            return 1
        } else {
            return -1
        }
    })

    repos.length = 7
    if(window.innerWidth < 1000) repos.length = 6
    if(window.innerWidth < 750) repos.length = 5
    if(window.innerWidth < 500) repos.length = 4
    if(window.innerWidth < 300) repos.length = 3

    repos.forEach(project => {
        const newProject = new projectInList(project.name, project.description, project.html_url)
        reposList.appendChild(newProject.fullHtmlNode)
    });
})


class projectInList {
    constructor(name, description, link) {
        this.link = document.createElement("a")
        this.wrapper = document.createElement("div")
        this.heading = document.createElement("h2")
        this.description = document.createElement("p")

        this.headingTextNode = document.createTextNode(name)
        this.descriptionTextNode = document.createTextNode(description)

        this.link.classList.add("project-link")
        this.link.classList.add("project")
        this.wrapper.classList.add("project-wrapper")
        this.wrapper.classList.add("project")
        this.heading.classList.add("project-heading")
        this.description.classList.add("project-description")
        
        this.wrapper.appendChild(this.heading)
        this.wrapper.appendChild(this.description)
        this.link.appendChild(this.wrapper)
        this.heading.appendChild(this.headingTextNode)
        this.description.appendChild(this.descriptionTextNode)
        
        this.link.href = link
    }

    get fullHtmlNode() {
        return this.link
    }
}
