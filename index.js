const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");
const todo = input.innerText;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    add();
    input.value = "";
});

function add() {
    const li = document.createElement("li");
    li.innerText = input.value;
    li.classList.add("list-group-item");
    ul.appendChild(li);
    input.value = "";
}