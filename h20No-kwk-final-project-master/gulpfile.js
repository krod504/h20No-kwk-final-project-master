var fact = ["Makes Beaches unsafe for humans and wildlife",
"Kills Wildlife everyday","Poisons Wildlife everyday because they think the trash is food","Oils and Chemicals poison the wildlife",
"Contaminated fish are often used in the food industry and humans get poisoned",
"Litter often obstructs boats from traveling and can damage property", "Litter traps sea creatures, leaving them vulnerable",
"Trash gathers into huge patches of garbage", "Leads to contamination of water supplies",
"Bacteria and Chemicals make their way up the food chain, poisoning animals and humans", "Algae blooms (like red tides) are caused, creating dead zones where life cannot be supported"]
var button = $('.links');
var quotehere = $('.quotehere');

button.on('click', randomize);

function randomize(){
  event.preventDefault();
  var random = Math.floor(Math.random()*(fact.length-1));
  var newfact = fact[random];
  quotehere.text(newfact);
}

var funfact = ["The sea makes up more than 70 percent of the Earth’s surface",
"Most of the life on Earth lives in the ocean.", "Less than five percent of our oceans have been explored.",
"The world’s longest mountain chain is underwater.", "There are more historic artefacts under the sea than in all of the world’s museums.",
"We have only discovered a small amount of the marine species in our oceans.",
"Over 70 percent of our planet’s oxygen is produced by the ocean.",
"It’s possible to find rivers and lakes beneath the ocean.",
"The Pacific Ocean is the world’s largest ocean."]
var buttontwo = $('.buttontwo');
var facthere= $('.funfact');

buttontwo.on('click', mix);

function mix(){
  event.preventDefault();
  var randoms = Math.floor(Math.random()*(funfact.length-1));
  var newfunfact = funfact[randoms];
  facthere.text(newfunfact);
}

 // var factory = [ factoryz]
