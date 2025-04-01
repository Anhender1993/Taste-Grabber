const SPOONACULAR_API_KEY = '736c4b6768174668815f3bdf3c366298';
const BASE_URL = 'https://api.spoonacular.com/recipes';

async function getSimilarRecipes(ingredients) {
    if (!ingredients || ingredients.length === 0) return [];

    const query = ingredients.join(',');
    const url = `${BASE_URL}/complexSearch?apiKey=${SPOONACULAR_API_KEY}&includeIngredients=${encodeURIComponent(query)}&number=6`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error('Spoonacular API error:', response.status);
            return [];
        }

        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error('Error fetching from Spoonacular:', error);
        return [];
    }
}