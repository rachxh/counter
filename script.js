let counter=0
let countEl = document.getElementById("count-el")
let logEl = document.getElementById("log-el")

function increment() {
    counter++
    console.log("the button was clicked")
    countEl.textContent = counter
}

countEl.style.color = "red"

function save() {
    logEl.textContent += counter + " - "
    counter=0
    countEl.textContent = counter
}

