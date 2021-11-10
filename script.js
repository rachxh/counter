let counter=0
let countEl = document.getElementById("count-el")

function increment() {
    counter++
    console.log("the button was clicked")
    countEl.innerText = counter
}

countEl.style.color = "red"