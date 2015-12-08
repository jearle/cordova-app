

import { expect } from 'chai';


export default function waitForScope (scope, operation, callback, count) {

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