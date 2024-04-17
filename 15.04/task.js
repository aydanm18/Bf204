const increment = document.querySelector(".inc");
const results = document.querySelector(".result");
const decremnet = document.querySelector(".dec");
const resets = document.querySelector(".reset");

results.textContent = localStorage.getItem("result") || 0;


increment.addEventListener("click", () => {
    results.textContent = +results.textContent + 1;
    localStorage.setItem("result", results.textContent)
});

decremnet.addEventListener("click", () => {
    results.textContent = +results.textContent - 1;
    localStorage.setItem("result", results.textContent)
});

resets.addEventListener("click", () => {
    results.textContent = 0;
    localStorage.setItem("result", results.textContent)
});