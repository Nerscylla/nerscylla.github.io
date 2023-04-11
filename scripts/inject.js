let style = document.createElement("link")
style.rel = "stylesheet"
style.href = "style/style.css"
document.head.appendChild(style)

style = document.createElement("link")
style.rel = "stylesheet"
style.href = "style/navigation.css"
document.head.appendChild(style)

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