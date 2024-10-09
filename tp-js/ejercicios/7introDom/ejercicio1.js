const btn = document.querySelector(".btn1");

btn.addEventListener("click", () => {
    const paragraphs = document.querySelectorAll(".p1");
    paragraphs.forEach((paragraph) => {
        paragraph.style.color = 'blue';
    })
})