document.addEventListener('DOMContentLoaded', () => {
    const analyzeBtn = document.getElementById('analyzeBtn');
    const inputArea = document.getElementById('recipeInput');
    const resultsGrid = document.getElementById('resultsGrid');

    analyzeBtn.addEventListener('click', async () => {
        const inputText = inputArea.value.trim();

        if (!inputText) {
            alert("Please paste a recipe.");
            return;
        }

        const ingredients = extractIngredients(inputText);

        if (ingredients.length === 0) {
            alert("No valid ingredients found.");
            return;
        }

        const recipes = await getSimilarRecipes(ingredients);
        displayResults(recipes);
    });

    function displayResults(recipes) {
        resultsGrid.innerHTML = '';

        if (!recipes || recipes.length === 0) {
            resultsGrid.innerHTML = '<p>No similar recipes found.</p>';
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
            resultsGrid.appendChild(card);
        });
    }
});