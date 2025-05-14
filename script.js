const container = document.createElement("div");
container.classList.toggle("container");
document.body.appendChild(container);
for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    container.appendChild(row);
    for (let j = 0; j < 16; j++) {
        let item = document.createElement("div");
        item.classList.toggle("item");
        row.appendChild(item);
    }
}