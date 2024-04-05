
const body = document.body;
const btn = document.querySelector(".change-bg");
btn.addEventListener('click', function () {
    const random1 = parseInt(Math.random() * 256);
    const random2 = parseInt(Math.random() * 256);
    const random3 = parseInt(Math.random() * 256);
    const str = `rgb(${random1}, ${random2}, ${random3})`;
    body.style.background = str;
})
