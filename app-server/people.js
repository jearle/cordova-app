

var chance = require('chance')();

function generatePeople (count) {

  var people = [];


  for (var i = 0 ; i <  count ; i++) {
    
    people.push({

      name: chance.name(),
      email: chance.email(),
      phone: chance.phone()

    });

  }

  return people;

}

module.exports = generatePeople;