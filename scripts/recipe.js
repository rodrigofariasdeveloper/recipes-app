// Only load page if given recipe exists
const recipeId = window.location.hash.substring(1);

if (!recipeId) {
	location.assign('./index.html');
}

// Select elements
const recipeTitle = document.querySelector('#recipe-title');
const recipeBody = document.querySelector('#recipe-body');
const ingredientForm = document.querySelector('#ingredients-form');
const ingredientInput = document.querySelector('#ingredient');
const ingredientsEl = document.querySelector('#list-ingredients');

// Recipes array and index of individual recipe
const recipes = getSavedRecipes();
const index = getRecipeIndex(recipeId);

// Setup inputs
recipeTitle.value = recipes[index].title;
recipeBody.value = recipes[index].body;

renderIngredients(index);

recipeTitle.addEventListener('input', event => {
	if (event.target.value.trim()) {
		recipes[index].title = event.target.value;
		saveRecipes(recipes);
	}
});

recipeBody.addEventListener('input', event => {
	if (event.target.value.trim()) {
		recipes[index].body = event.target.value;
		saveRecipes(recipes);
	}
})

ingredientForm.addEventListener('submit', function(event) {
	event.preventDefault();

	if (event.target.ingredient.value.trim()) {
		const ingredient = event.target.ingredient.value.trim();
		saveIngredient(ingredient, index);
		renderIngredients(index);
	}
});
