

import { expect } from 'chai';


import getSchemas from 'services/schemas';


describe('getSchemas', function () {

  
  it(`should have property people`, () => 
    getSchemas()
      .then((schemas) => expect(schemas).to.have.property('people')));


  it(`should have property otherPeople`, () => 
    getSchemas()
      .then((schemas) => expect(schemas).to.have.property('otherPeople')));


});