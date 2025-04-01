// Extract ingredient-like keywords from pasted recipe text
function extractIngredients(text) {
    // Basic ingredient word pattern matching (can be improved)
    const lines = text.toLowerCase().split('\n');
    const ingredients = [];

    for (let line of lines) {
        const match = line.match(/[a-z\s]+/g);
        if (match) {
            let cleaned = match.join('').trim();
            if (cleaned.length > 2) {
                ingredients.push(cleaned);
            }
        }
    }

    return [...new Set(ingredients)]; // remove duplicates
}