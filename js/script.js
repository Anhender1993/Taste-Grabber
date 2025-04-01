document.getElementById('analyzeBtn').addEventListener('click', async () => {
    const inputText = document.getElementById('recipeInput').value;
    const ingredients = extractIngredients(inputText);

    if (ingredients.length === 0) {
        alert("No ingredients detected. Please paste a valid recipe.");
        return;
    }

    const recommendations = await getSimilarRecipes(ingredients);
    displayResults(recommendations);
});

function displayResults(recipes) {
    const grid = document.getElementById('resultsGrid');
    grid.innerHTML = '';

    if (recipes.length === 0) {
        grid.innerHTML = '<p>No recipes found.</p>';
        return;
    }

    recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <a href="https://spoonacular.com/recipes/${recipe.title.replace(/ /g, "-")}-${recipe.id}" target="_blank">View Recipe</a>
        `;
        grid.appendChild(card);
    });
}