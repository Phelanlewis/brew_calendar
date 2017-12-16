// The following line is NOT required for web browser use
var Brauhaus = require('brauhaus')

// Import plugins here, e.g.
require('brauhaus-beerxml')

// Create a recipe
var r = new Brauhaus.Recipe({
  name: 'My test brew',
  description: 'A new test beer using Brauhaus.js!',
  batchSize: 20.0,
  boilSize: 10.0
})

// Add ingredients
r.add('fermentable', {
  name: 'Extra pale malt',
  color: 2.5,
  weight: 4.2,
  yield: 78.0
})

r.add('hop', {
  name: 'Cascade hops',
  weight: 0.028,
  aa: 5.0,
  use: 'boil',
  form: 'pellet'
})

r.add('yeast', {
  name: 'Wyeast 3724 - Belgian Saison',
  type: 'ale',
  form: 'liquid',
  attenuation: 80
})

// Set up a simple infusion mash
r.mash = new Brauhaus.Mash({
  name: 'My mash',
  ph: 5.4
})

r.mash.addStep({
  name: 'Saccharification',
  type: 'Infusion',
  time: 60,
  temp: 68,
  waterRatio: 2.75
})

// Calculate values
r.calculate()

// Print out calculated values
console.log('Original Gravity: ' + r.og.toFixed(3))
console.log('Final Gravity: ' + r.fg.toFixed(3))
console.log('Color: ' + r.color.toFixed(1) + '&deg; SRM (' + r.colorName() + ')')
console.log('IBU: ' + r.ibu.toFixed(1))
console.log('Alcohol: ' + r.abv.toFixed(1) + '% by volume')
console.log('Calories: ' + Math.round(r.calories) + ' kcal')