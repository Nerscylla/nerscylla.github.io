// save nessecarry html nodes in variables
const reposList = document.getElementById("projects-list")

// get my repos from github api
fetch("https://api.github.com/users/thebaum123/repos")
.then(data => {
    return data.json()
})
.then(repos => {
    // randomize the order of my repos
    repos.sort((a, b) => {
        if(Math.random() > 0.5) {
            return 1
        } else {
            return -1
        }
    })

    // shorten the repo list depending on
    // the screen size to not overpopulate
    repos.length = 7
    if(window.innerWidth < 1000) repos.length = 6
    if(window.innerWidth < 750) repos.length = 5
    if(window.innerWidth < 500) repos.length = 4
    if(window.innerWidth < 300) repos.length = 3

    // add the repos to the list
    repos.forEach(project => {
        const newProject = new projectInList(project.name, project.description, project.html_url)
        reposList.appendChild(newProject.fullHtmlNode)
    });
})


// class for new projects for the project list
class projectInList {
    constructor(name, description, link) {
        // create all elements
        this.link = document.createElement("a")
        this.wrapper = document.createElement("div")
        this.heading = document.createElement("h2")
        this.description = document.createElement("p")

        // create text nodes for heading
        // and descrtiption
        this.headingTextNode = document.createTextNode(name)
        this.descriptionTextNode = document.createTextNode(description)

        // add classes to the nodes
        this.link.classList.add("project-link")
        this.link.classList.add("project")
        this.wrapper.classList.add("project-wrapper")
        this.wrapper.classList.add("project")
        this.heading.classList.add("project-heading")
        this.description.classList.add("project-description")

        // append nodes to each other and
        // to link to make component tree
        this.wrapper.appendChild(this.heading)
        this.wrapper.appendChild(this.description)
        this.link.appendChild(this.wrapper)
        this.heading.appendChild(this.headingTextNode)
        this.description.appendChild(this.descriptionTextNode)

        // point link to repo
        this.link.href = link
    }

    // getter for the final product (link)
    // that gets added to the project list
    get fullHtmlNode() {
        return this.link
    }
}
