const servingsInput = document.getElementById("servings");
const baseServings = parseInt(servingsInput.dataset.base, 10);

const dataElements = document.querySelectorAll("data[value]");

dataElements.forEach((element) => {
    element.dataset.base = element.getAttribute("value");
});

const formatQuantity = (quantity) => {
    if (quantity < 1) {
        return quantity.toFixed(2).replace(/\.?0+$/, "");
    }
    if (quantity < 10) {
        return quantity.toFixed(1).replace(/\.0$/, "");
    }
    return Math.round(quantity).toString();
};

const updateQuantities = () => {
    const numberOfServings = parseInt(servingsInput.value, 10);

    if (isNaN(numberOfServings) || numberOfServings < 1) {
        return;
    }

    const multiplier = numberOfServings / baseServings;

    dataElements.forEach((element) => {
        const base = parseFloat(element.dataset.base);
        const scaled = base * multiplier;
        element.textContent = formatQuantity(scaled);
    });

    document.getElementById("current-servings").textContent =
        servingsInput.value;
};

servingsInput.addEventListener("input", updateQuantities);
