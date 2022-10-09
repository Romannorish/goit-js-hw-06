const ingredients = [ 
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector('ul');
console.log(ingredientsEl);


const itemEl = ingredients.map(ingredient => {
  const Items = document.createElement('li');
  Items.classList.add('item');
  Items.textContent = ingredient;
  return Items;
})

ingredientsEl.append(...itemEl);