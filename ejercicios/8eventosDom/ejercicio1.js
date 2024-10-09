const lists = document.querySelectorAll(".li1");
lists.forEach((list) => {
    list.addEventListener("click", () => {
        console.log(list.textContent);
    })
});