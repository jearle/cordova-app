

import { expect } from 'chai';


import jseAside from 'components/jse-aside';


import getScope from '../../helpers/get-scope';


describe('jse-aside', function () {


  let scope = null;


  beforeEach(() =>
    
    scope = getScope(
      jseAside, 
      null, 
      []));


  it('should have create a scope that is an object', () =>

    expect(scope).to.be.an('object'));


});