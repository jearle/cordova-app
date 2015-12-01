

import app from '../app';


const template = `

  <aside ng-class="{ 'closed': closed, 'open': open }">

    <header>
    
    </header>
    
    <nav>

      <ul>

        <li ng-repeat="item in navigation">

          <a 
            href="#/{{ item.name }}"
            ng-click="navItemClicked({item: item})">

            {{ item.title }}
            
          </a>

        </li>

      </ul>

    </nav>

  </aside>

`;


const link = () => $scope => {


  // $scope.linkClicked = function (item) {
    
  //   $scope.navItemClicked({item: item});

  // };


};


const config = () => () => ({
  
  scope: {
    
    closed: '=',
    open: '=',
    navigation: '=',
    navItemClicked: '&'

  },

  replace: true,
  template,
  link: link()

});


export default () => app.directive('jseAside', [ config() ]);