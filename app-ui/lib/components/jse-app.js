

import app from '../app';


import aside from './jse-aside';
import article from './jse-article';


import asideDisplayHelper from '../helpers/aside-display';


aside();
article();


const template = `

  <main>


    <jse-aside
      closed="isAsideClosed"
      open="isAsideOpen"></jse-aside>

    
    <jse-article
      menu-button-clicked="menuButtonClicked()"></jse-article>


  </main>

`;


const link = (store, $location) => ($scope) => {

  
  $scope.isAsideClosed = !!$location.search()['aside-closed'];
  $scope.isAsideOpen = !!$location.search()['aside-open'];

  // console.log(asideDisplayHelper($scope, $location));
  $scope.menuButtonClicked = asideDisplayHelper($scope, $location);


  


};


const config = (store) => ($location) => ({
  
  replace: true,
  template,
  link: link(store, $location)

});


export default (store) => app.directive('ecoApp', [ 
  
  '$location', 
  config(store) 

]);