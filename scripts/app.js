const btnAddRecipe = document.querySelector('#add-recipe');
let recipes = [];

const recipesJSON = localStorage.getItem('recipes');

if (recipesJSON) {
	recipes = JSON.parse(recipesJSON);
}

btnAddRecipe.addEventListener('click', event => {
	const id = uuidv4();
	recipes.push({
		id,
		title: 'Unnamed recipe',
		body: '',
	});
	
	saveRecipes(recipes);

	location.assign(`./recipes.html#${id}`);
});

console.log(renderRecipes(recipes));