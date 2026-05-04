const recipeSearchInput = document.getElementById("recipe-search");
const recipeList = document.getElementById("recipe-list");
const searchStatus = document.getElementById("search-status");
const noResultsElement = document.getElementById("no-results");
const recipesArr = Array.from(recipeList.querySelectorAll("li"));

recipeSearchInput.addEventListener("input", () => {
    const query = recipeSearchInput.value.trim().toLowerCase();
    let visible = 0;

    recipesArr.forEach((recipeListItem) => {
        const text = recipeListItem.textContent.toLowerCase();
        const isMatch = text.includes(query);
        recipeListItem.hidden = !isMatch;
        if (isMatch) {
            visible++;
        }
    });

    noResultsElement.hidden = visible !== 0;

    if (query === "") {
        searchStatus.textContent = "";
        return;
    }

    if (visible === 0) {
        searchStatus.textContent = `No recipes match "${recipeSearchInput.value}".`;
        return;
    }
    searchStatus.textContent = `${visible} recipe${visible === 1 ? "" : "s"} match "${recipeSearchInput.value}".`;
});
