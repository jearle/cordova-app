

import { expect } from 'chai';


import jseApp from 'components/jse-app';
import services from 'services';


function createApp (services) {

  return {

    scope: {
      
      $watch () {},

      $apply: callback => callback()

    },

    directive (name, directiveArr) {
      
      const config = directiveArr[directiveArr.length - 1];
      const link = config.apply(this, services).link;

      link(this.scope);

    }

  };

}


function createMockLocationService () {

  return {

    search () {

      return {};

    },

    path () {
      
      return '';
      
    }

  };

}


function getScope (component, store, services) {

  const location = createMockLocationService();
  const app = createApp(services);
  const scope = app.scope;

  component(app, store);

  return scope;

}


function waitForScope (scope, operation, callback, count) {

  if (!count) {

    count = 0;

  }

  expect(count += 1).to.not.equal(10);


  setTimeout(() => {

    if (scope.people.length === 0) {
      
      waitForScope(scope, null, callback, count);

    } else {

      callback();
      

    }

  }, 10);


}


describe('jse-app', function () {


  let scope = null;

  beforeEach(() =>
    scope = getScope(
      jseApp, 
      services(), 
      [createMockLocationService()]));


  it(`isAsideClosed should be set to false`, () =>

    expect(scope.isAsideClosed)
      .to.equal(false));


  it(`isAsideOpen should be set to false`, () =>
    
    expect(scope.isAsideOpen)
      .to.equal(false));


  it(`should have an array of people`, () =>

    expect(scope.people)
      .to.be.an('array'));


  it(`should have a schema array`, () =>

    expect(scope.schema)
      .to.be.an('array'));


  it(`should have a menuButtonClicked function`, () =>

    expect(scope.menuButtonClicked)
      .to.be.a('function'));


  it(`should have an array of people with length 2000`, (done) =>
    
    waitForScope(scope, scope.navItemClicked({ name: 'people' }), () => {
      
      expect(scope.people).to.have.length(2000);
      done();

    }));


  it(`should have an array of schema with length 3`, (done) =>
    
    waitForScope(scope, scope.navItemClicked({ name: 'people' }), () => {
      
      expect(scope.schema).to.have.length(3);
      done();

    }));


  it(`should have an array navigation with length 2`, (done) =>
    
    waitForScope(scope, scope.navItemClicked({ name: 'people' }), () => {
      
      expect(scope.navigation).to.have.length(2);
      done();

    }));


});