const btn = document.querySelector(".btn2");

btn.addEventListener("click", () => {
    const textInput = document.querySelector("#textInput1").value;
    alert("Has ingresado un mensaje: " + textInput);
});