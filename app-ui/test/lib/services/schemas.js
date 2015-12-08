

import { expect } from 'chai';


import getSchemas from 'services/schemas';


describe('getSchemas', function () {

  
  it(`should have property people`, () => 
    getSchemas('http://localhost:3001')()
      .then((schemas) => expect(schemas).to.have.property('people')));


  it(`should have property otherPeople`, () => 
    getSchemas('http://localhost:3001')()
      .then((schemas) => expect(schemas).to.have.property('otherPeople')));


});