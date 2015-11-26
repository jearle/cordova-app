

import { expect } from 'chai';


import dashToCamel from 'helpers/dash-to-camel';


const permutations = [
  
  [ 'nodash', 'nodash' ],
  [ 'one-dash', 'oneDash' ],
  [ 'two-dash-es', 'twoDashEs' ]

];


describe('dashToCamel', function () {

  
  permutations
    .forEach((permutation) => {

      const input = permutation[0];
      const result = permutation[1];

      it(`${input} should be camelcased to ${result}`, () => 
        expect(dashToCamel(input)).to.equal(result));

    });


});