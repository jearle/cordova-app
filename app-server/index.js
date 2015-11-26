

var express = require('express');
var chance = require('chance');


var generatePeople = require('./people');


var app = express();


var people = generatePeople(2000);
var otherPeople = generatePeople(2000);

var navigation = [

  {

    name: 'people',
    title: 'People'

  },

  {

    name: 'other-people',
    title: 'Other People'
    
  }
  
];

var peopleFields = [
  
  'email',
  'name',
  'phone'

];

var schemas = {

  people: peopleFields,
  otherPeople: peopleFields 

};


app.get('/people', function (req, res) {

  res.json(people);

});


app.get('/other-people', function (req, res) {

  res.json(otherPeople);

});


app.get('/navigation', function (req, res) {

  res.json(navigation);

});


app.get('/schemas', function (req, res) {

  res.json(schemas);

});


module.exports = app;
// app.listen(3001);
// console.log('listening on http://localhost:3001');