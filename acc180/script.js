const servingsInput = document.getElementById("servings");
const baseServings = 4;

const dataElements = document.querySelectorAll("data[value]");
dataElements.forEach((el) => {
    el.dataset.base = el.getAttribute("value");
});

function updateQuantities() {
    const multiplier = servingsInput.value / baseServings;
    document.getElementById("current-servings").textContent =
        servingsInput.value;
    dataElements.forEach((el) => {
        const base = parseFloat(el.dataset.base);
        const scaled = base * multiplier;
        el.textContent = formatQuantity(scaled);
    });
}

function formatQuantity(n) {
    if (n < 1) return n.toFixed(2).replace(/\.?0+$/, "");
    if (n < 10) return n.toFixed(1).replace(/\.0$/, "");
    return Math.round(n).toString();
}

servingsInput.addEventListener("input", updateQuantities);
