const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach((paragraph) => {
        paragraph.style.color = 'blue';
    })
})