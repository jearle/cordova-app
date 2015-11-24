

import app from '../app';


import './eco-nav';


const template = `

  <nav>
    
    <ul>

      <li>

          <a href="#">Home</a>

      </li>

      <li ng-repeat="item in navigation">

        <a href="#{{ item.store }}">{{ item.title }}</a>

      </li>

    </ul>

  </nav>
  
`;


export default

  app
    .directive('ecoNav', [

      function () {

        return {

          replace: true,

          scope: {
            
            navigation: '='

          },

          template,

          // link: function ($scope) {

            

          // }

        };

      }

    ]);