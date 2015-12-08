

import { expect } from 'chai';


import jseApp from 'components/jse-app';
import services from 'services';


import createMockLocationService from '../../helpers/create-mock-location-service';
import getScope from '../../helpers/get-scope';
import waitForScope from '../../helpers/wait-for-scope';


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