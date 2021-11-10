let counter = 0;
let countEl = document.getElementById("count-el");
let logEl = document.getElementById("log-el");

function increment() {
    console.log("increment");
    counter++;
    countEl.textContent = counter;
}

function save() {
    console.log("save");
    logEl.textContent += counter + " - ";
    counter = 0;
    countEl.textContent = counter;
}
