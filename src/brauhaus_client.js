// The following line is NOT required for web browser use
var Brauhaus = require('brauhaus')

// Import plugins here, e.g.
require('brauhaus-beerxml')

// Create a new recipe
var recipe = new Brauhaus.Recipe({
  name: 'Test Recipe',
  batchSize: 20.0,
  ibuMethod: 'tinseth'
})

// Add 4kg of pale extract
recipe.add('fermentable', {
  name: 'Extra pale extract',
  weight: 4.0,
  color: 2.5,
  yield: 75.0
})

// Add 1oz of cascade at 60 minutes
recipe.add('spice', {
  name: 'Cascade hops',
  weight: Brauhaus.lbOzToKg(0, 1.0),
  time: 60,
  aa: 4.5,
  form: 'pellet'
})

// Add some liquid yeast
recipe.add('yeast', {
  name: 'Wyeast 3052',
  type: 'ale',
  form: 'liquid',
  attenuation: 74
})

// Calculate the recipe values!
recipe.calculate()

console.log(recipe.name)
console.log('--------------------------')
console.log('Batch size: ' + recipe.batchSize.toFixed(1) + ' liters (' + Math.round(recipe.batchSize / recipe.servingSize) + ' bottles)')
console.log('Boil size: ' + recipe.boilSize.toFixed(1) + ' liters')
console.log('')
console.log('OG: ' + recipe.og.toFixed(3) + ' (' + recipe.ogPlato.toFixed(1) + '&deg; Plato)')
console.log('FG: ' + recipe.fg.toFixed(3) + ' (' + recipe.fgPlato.toFixed(1) + '&deg; Plato)')
console.log('Color: ' + recipe.color.toFixed(1))
console.log('IBU: ' + recipe.ibu.toFixed(1))
console.log('ABV: ' + recipe.abv.toFixed(1) + '%')
console.log('Calories: ' + Math.round(recipe.calories))
console.log('')
console.log('BU/GU: ' + recipe.buToGu.toFixed(2))
console.log('BV: ' + recipe.bv.toFixed(2))
console.log('')
console.log('Cost: about $' + recipe.price.toFixed(2) + ' ($' + (recipe.price / (recipe.batchSize / recipe.servingSize)).toFixed(2) + ' / bottle)')
