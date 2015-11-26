

import app from '../app';


const template = `

  <aside ng-class="{ 'closed': closed, 'open': open }">

    <header>
    
    </header>
    
    <nav>

      <ul>

        <li>

          <a href="#/people">
            People
          </a>

        </li>

      </ul>

    </nav>

  </aside>

`;


const link = () => ($scope) => {
  
  $scope.$watch('closed', () =>
    console.log($scope.closed));

};


const config = () => () => ({
  
  scope: {
    closed: '=',
    open: '='
  },

  replace: true,
  template,
  link: link()

});


export default () => app.directive('jseAside', [ config() ]);