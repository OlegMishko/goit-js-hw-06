const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = ingredients.map(ingredient => {
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add('item');
  return ingredientItem;
});

const ingredientItemList = document.querySelector('#ingredients');
ingredientItemList.append(...ingredientsEl);