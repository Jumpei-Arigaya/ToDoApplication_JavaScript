const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");
const todo = input.innerText;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(todo);
    // document.createElement(todo);
    // // ul.appendChild(li);
    //aaakousinn

    input.value = "";
});