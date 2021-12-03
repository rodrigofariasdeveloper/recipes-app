const btnAddRecipe = document.querySelector('#add-recipe');
const recipes = getSavedRecipes();

btnAddRecipe.addEventListener('click', event => {
	const id = uuidv4();
	recipes.push({
		id,
		title: 'Unnamed recipe',
		body: '',
		ingredients: [],
	});
	
	saveRecipes(recipes);

	location.assign(`./recipes.html#${id}`);
});

renderRecipes(recipes);