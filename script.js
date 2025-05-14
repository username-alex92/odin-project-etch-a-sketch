// Generate new grid
const numberSquares = document.createElement("button");
numberSquares.textContent = "Change number of squares";
document.body.appendChild(numberSquares);

numberSquares.addEventListener("click", () => {
    const userChoice = prompt("Enter a number up to 100");
    createGrid(parseInt(userChoice));
});


// Create square divs
const container = document.createElement("div");
container.classList.toggle("container");
document.body.appendChild(container);

function createGrid(userChoice) {
    container.textContent = "";
    const size = 800 / userChoice;
    for (let i = 0; i < userChoice; i++) {
        let row = document.createElement("div");
        row.classList.toggle("row");
        container.appendChild(row);
        for (let j = 0; j < userChoice; j++) {
            let item = document.createElement("div");
            item.classList.toggle("item");
            item.style.width = `${size}px`;
            item.style.height = `${size}px`;
            row.appendChild(item);
        }
    }

    container.style.maxWidth = "800px";
}


// Hover effect
container.addEventListener("mouseover", (event) => {
    event.target.style.background = randomRGB();
});

function randColorNum() {
    return Math.floor(Math.random() * 256);
}

function randomRGB() {
    return `rgb(${randColorNum()},${randColorNum()},${randColorNum()})`;
}
