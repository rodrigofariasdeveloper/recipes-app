const recipeTitle = document.querySelector('#recipe-title');
const recipeBody = document.querySelector('#recipe-body');

const recipeId = window.location.hash.substring(1);

if (!recipeId) {
	location.assign('./index.html');
}

const recipes = getSavedRecipes();
const index = getRecipeIndex(recipeId);

recipeTitle.value = recipes[index].title;
recipeBody.value = recipes[index].body;

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