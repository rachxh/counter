let counter=0

function increment() {
    counter++
    console.log("the button was clicked")
    document.getElementById("count-el").innerText = counter
}
