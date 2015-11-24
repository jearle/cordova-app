

import app from '../app';


const template = `

  <table>

    <tr>

      <th ng-repeat="field in schema">
      
        {{ field }}

      </th>

    </tr>

    <tr ng-repeat="person in people">

      <td ng-repeat="field in schema">
      
        {{ person[field] }}

      </td>

    </tr>

  </table>
  
`;


export default

  app
    .directive('ecoTable', [

      function () {

        return {

          replace: true,

          scope: {

            people: '=',
            schema: '='

          },

          template,

          // link: function ($scope) {

            

          // }

        };

      }

    ]);