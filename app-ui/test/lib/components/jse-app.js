

import { expect } from 'chai';


import jseApp from 'components/jse-app';


function createApp (location) {

  return {

    scope: {},

    directive (name, directiveArr) {

      console.log(name);
      
      const config = directiveArr[directiveArr.length - 1];
      const link = config(location).link;

      link(this.scope);

      console.log(this.scope);

    }

  };

}


describe.only('jse-app', function () {

  
  it(`do something`, () => {

    let scope = null;

    const store = {

      navigation () {
        
      }

    };
    
    const location = {

      search () {

        return {};

      },

      path () {
        console.log('path called');
        return '';
      }

    };
    const app = createApp(location);
    scope = app.scope;

    jseApp(app, store);

  });


});