const form = document.querySelector('#form');
const mailInput = document.querySelector('#mailInput');
const hasEmailP = document.querySelector('#hasEmail');
const deleteEmailBtn = document.querySelector('#deleteMail');

if(localStorage.getItem("email")) {
    hasEmailP.innerText = "Correo guardado: " + localStorage.getItem("email");
}

form.addEventListener("submit", (e) => {
    localStorage.setItem("email", mailInput.value);
    hasEmailP.innerText = "Correo guardado: " + localStorage.getItem("email");
});

deleteEmailBtn.addEventListener("click", () => {
    localStorage.removeItem("email");
    hasEmailP.innerText = "No hay correo guardado";
})


