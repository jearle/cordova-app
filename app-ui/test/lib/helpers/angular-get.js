

import { expect } from 'chai';


import angularGet from 'helpers/angular-get';


describe('angularGet', function () {

  
  it(`get an angular service`, () => 
        expect(angularGet('$http')).to.be.a('function'));


});