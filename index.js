const form = document.getElementById("form");
const input = (document.getElementById("input"));

form.addEventListener('submit', (event) => {
    console.log(input.value);
    event.preventDefault();
    input.value = "";
});