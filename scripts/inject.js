let style = document.createElement("link")
style.rel = "stylesheet"
style.href = "style/style.css"
document.head.appendChild(style)

style = document.createElement("link")
style.rel = "stylesheet"
style.href = "style/navigation.css"
document.head.appendChild(style)

let ionicon0 = document.createElement("script")
ionicon0.src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
ionicon0.type = "module"
document.body.appendChild(ionicon0)

let ionicon1 = document.createElement("script")
ionicon1.src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
ionicon1.noModule = true
document.body.appendChild(ionicon1)

for(let i = 0; i < sectionCount; i++) {
    style = document.createElement("link")
    style.rel = "stylesheet"
    style.href = "style/sections/section" + i + ".css"
    document.head.appendChild(style)
}

for(let i = 0; i < sectionCount; i++) {
    const script = document.createElement("script")
    script.src = "scripts/sections/section" + i + ".js"
    document.body.appendChild(script)
}