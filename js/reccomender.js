const SPOONACULAR_API_KEY = '736c4b6768174668815f3bdf3c366298';
const BASE_URL = 'https://api.spoonacular.com/recipes';

/**
 * Get similar recipe recommendations based on extracted ingredients
 */
async function getSimilarRecipes(ingredients) {
    const query = ingredients.slice(0, 5).join(','); // Limit to 5 for query size
    const url = `${BASE_URL}/complexSearch?apiKey=${SPOONACULAR_API_KEY}&includeIngredients=${encodeURIComponent(query)}&number=6`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error('Error fetching recipes:', error);
        return [];
    }
}