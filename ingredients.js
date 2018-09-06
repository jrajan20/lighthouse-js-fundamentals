
var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
// Write a while loop that prints out the contents of ingredients:
var items = 0;
while (items < ingredients.length)
{
	console.log(ingredients[items]);
	items ++;
}

// Write a for loop that prints out the contents of ingredients:
for ( var i = 0; i < ingredients.length; i++)
{
	console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for ( var i = ingredients.length - 1; i >= 0; i--)
{
	console.log(ingredients[i]);
}