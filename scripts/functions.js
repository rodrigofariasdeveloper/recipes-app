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
		
	a.textContent = recipe.title;
	a.href = `./recipes.html#${recipe.id}`;
	a.className = 'recipe-link';

	div.className = 'recipe-container';
	div.appendChild(a);

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