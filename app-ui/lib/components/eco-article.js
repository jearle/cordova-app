

import app from '../app';


import './eco-table';
import './eco-form';


const template = `

  <article>

    <button ng-click="onViewButtonClick('form')">
      form
    </button>

    <button ng-click="onViewButtonClick('table')">
      table
    </button>

    <div
      ng-switch 
      on="viewType">

      <div ng-switch-when="form">

        <eco-form
          people="people"
          schema="schema">
        </eco-form>

      </div>

      <div ng-switch-when="table">

        <eco-table
          people="people"
          schema="schema">
        </eco-table>

      </div>

    </div>
   
  </article>
  
`;


export default

  app
    .directive('ecoArticle', [

      function () {

        return {

          replace: true,

          scope: {

            people: '=',
            schema: '='

          },

          template,

          link ($scope) {

            $scope.onViewButtonClick = (type) =>
              $scope.viewType = type;

          }

        };

      }

    ]);