const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");
const li = input.value

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(input.value);

    // ul.appendChild(li);

    input.value = "";
});