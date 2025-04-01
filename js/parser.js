function extractIngredients(text) {
    const lines = text.toLowerCase().split('\n');
    const ingredients = [];

    // Patterns to remove
    const quantityPattern = /^[\d\s\/.,\-¼½¾⅓⅔⅛⅜⅝⅞]+[a-zA-Z\s\.]*\b/; // Matches "1 lb.", "4 Tbsp.", etc.
    const descriptorPattern = /\b(chopped|shredded|sliced|diced|minced|finely|about|plus more.*|for.*)\b/g;
    const stopwords = ['optional', 'to taste', 'divided'];

    for (let line of lines) {
        let cleaned = line
            .replace(quantityPattern, '')      // Remove "1 lb.", "3 cups", etc.
            .replace(descriptorPattern, '')    // Remove prep instructions
            .replace(/\([^)]*\)/g, '')         // Remove anything in parentheses
            .replace(/[^a-z\s]/g, '')          // Remove punctuation
            .trim();

        if (
            cleaned.length > 1 &&
            !stopwords.some(word => cleaned.includes(word)) &&
            !ingredients.includes(cleaned)
        ) {
            ingredients.push(cleaned);
        }
    }

    return ingredients.slice(0, 5); // limit to top 5
}