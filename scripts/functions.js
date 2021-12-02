// Save recipes array to localStorage
const saveRecipes = recipes => {
	localStorage.setItem('recipes', JSON.stringify(recipes));
};

// Render individual recipes to front page
const renderRecipes = recipes => {
	document.querySelector('#recipes').innerHTML = '';

	return recipes.forEach(recipe => {
		const div = document.createElement('div');
		const a = document.createElement('a');
		
		a.textContent = recipe.title;
		a.href = `./recipes.html#${recipe.id}`;
		a.className = 'recipe-link';

		div.className = 'recipe-container';
		div.appendChild(a);

		document.querySelector('#recipes').appendChild(div);
	});
};