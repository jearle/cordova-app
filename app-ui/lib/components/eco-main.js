

import app from '../app';


import './eco-nav';
import './eco-article';


const template = `

  <main>

    <eco-nav 
      navigation="navigation"></eco-nav>

    <eco-article
      people="people"
      schema="schema"></eco-article>

  </main>
  
`;

export default

  app
    .directive('ecoMain', [

      function () {

        return {

          replace: true,

          scope: {

            navigation: '=',
            people: '=',
            schema: '='

          },

          template,

          // link ($scope) {

          // }

        };

      }

    ]);