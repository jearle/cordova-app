

import { expect } from 'chai';


import getOtherPeople from 'services/other-people';


describe('getOtherPeople', function () {

  
  it(`should return 2000 people`, () => 
    getOtherPeople()
      .then((people) => expect(people).to.have.length(2000)));


});