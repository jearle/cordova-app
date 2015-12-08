

import { expect } from 'chai';


import jseArticle from 'components/jse-article';


import getScope from '../../helpers/get-scope';


describe('jse-article', function () {


  let scope = null;


  const getNames = () => ['z', 'y', 'x'];
  const getPeople = () => getNames().map((letter) => ({ name: letter }));


  beforeEach(() =>

    scope = getScope(
      jseArticle, 
      null, 
      [],
      { people: getPeople() }));


  it(`should have a view property equal to 'list'`, () =>

    expect(scope.view).to.equal('list'));


  it(`should set the view when viewClicked is called`, () => {

    scope.viewClicked('forms');

    expect(scope.view).to.equal('forms');

  });


  it(`should set the peopleToDisplay to equal the getPeople array`, () =>

    expect(scope.peopleToDisplay)
      .to.eql(getPeople()));


  it(`should sort the array when sortClicked is called`, () => {

    scope.sortClicked('name');

    expect(scope.people.map((person) => person.name))
      .to.eql(getNames().reverse());

  });


});