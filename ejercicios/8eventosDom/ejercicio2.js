const btnDeshabilitar = document.querySelector(".deshabilitar");
const btnHabilitar = document.querySelector(".habilitar");

btnDeshabilitar.addEventListener("click", () => {
    document.querySelector("#textInput2").disabled = true;
});

btnHabilitar.addEventListener("click", () => {
    document.querySelector("#textInput2").disabled = false;
});