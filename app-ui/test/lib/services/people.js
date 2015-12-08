

import { expect } from 'chai';


import getPeople from 'services/people';


describe('getPeople', function () {

  
  it(`should return 2000 people`, () => 
    getPeople('http://localhost:3001')()
      .then((people) => expect(people).to.have.length(2000)));


});