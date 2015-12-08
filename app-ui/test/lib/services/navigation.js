

import { expect } from 'chai';


import getNavigation from 'services/navigation';


describe('getNavigation', function () {

  
  it(`should return 2 navigation items`, () => 
    getNavigation('http://localhost:3001')()
      .then((navigation) => expect(navigation).to.have.length(2)));


});