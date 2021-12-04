// Save recipes array to localStorage
const saveRecipes = recipes => {
	localStorage.setItem('recipes', JSON.stringify(recipes));
};

// Render individual recipes to front page
const renderRecipes = recipes => {
	document.querySelector('#recipes').innerHTML = '';

	return recipes.forEach(recipe => {
		document.querySelector('#recipes').appendChild(generateRecipesDOM(recipe));
	});
};

// Generate DOM structure for the recipes
const generateRecipesDOM = recipe => {
	const div = document.createElement('div');
	const a = document.createElement('a');
	const p = document.createElement('p');

	a.textContent = recipe.title;
	a.href = `./recipes.html#${recipe.id}`;
	a.className = 'recipe-link';

	p.textContent = hasIngredients(recipe);
	p.className = 'ingredients-status';

	div.className = 'recipe-container';
	div.appendChild(a);
	div.appendChild(p);

	return div;
};

// Retrieved saved recipes from localStorage
const getSavedRecipes = () => {
	const recipesJSON = localStorage.getItem('recipes');

	try {
		return recipesJSON ? JSON.parse(recipesJSON) : [];
	} catch (error) {
		return [];
	}
};

// Grab individual recipe index by it's id
const getRecipeIndex = id => {
	const recipes = getSavedRecipes();

	const index = recipes.findIndex(recipe => {
		return recipe.id === id;
	});

	return index;
};

// Add ingredient to recipe
const saveIngredient = (ingredient, index) => {
	const recipes = getSavedRecipes();

	recipes[index].ingredients.push({
		ingredient,
		available: false,
	});

	saveRecipes(recipes);
};

// Render ingredients to the recipe page
const renderIngredients = (index) => {
	
	document.querySelector('#list-ingredients').innerHTML = '';

	const recipes = getSavedRecipes();

	recipes[index].ingredients.forEach(ingredient => {
		document.querySelector('#list-ingredients').appendChild(generateIngredientsDOM(ingredient));
	});
};

// Generate DOM structure for the ingredients
const generateIngredientsDOM = ingredient => {
	const div = document.createElement('div');
	div.className = 'ingredient';

	const checkbox = document.createElement('input');
	checkbox.setAttribute('type', 'checkbox');

	const p = document.createElement('p');
	p.textContent = ingredient.ingredient;
	p.className = 'ingredient-text';

	div.appendChild(checkbox);
	div.appendChild(p);

	return div;
};

// Check if recipe has all the ingredients
const hasIngredients = (recipe) => {
	// console.log(recipe);
	const ingredients = recipe.ingredients.map(ingredient => ingredient);
	const booleans = recipe.ingredients.filter(ingredient => ingredient.available === false);

	if (ingredients.length === 0) {
		 return 'You did not add any ingredients.';
	} else if (booleans.length > 0) {
		return 'You do not have all the ingredients.';
	} else {
		return 'You have all the ingredients.';
	}
}