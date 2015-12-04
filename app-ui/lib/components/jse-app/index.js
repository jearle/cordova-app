

import aside from '../jse-aside';
import article from '../jse-article';


import asideDisplayHelper from '../../helpers/aside-display';
import dashToCamel from '../../helpers/dash-to-camel.js';


const template = require('fs').readFileSync(__dirname + '/index.html', 'utf8');


const link = (store, $location) => ($scope) => {


  $scope.isAsideClosed = !!$location.search()['aside-closed'];
  $scope.isAsideOpen = !!$location.search()['aside-open'];
  $scope.people = [];
  $scope.schema = [];


  setData(getServiceNameFromPath());


  const asideOptions = {

    element: $(window),
    mobileWidth: 728

  };

  store
    .navigation()
    .then(data => $scope.$apply(() => $scope.navigation = data));
  
  
  $scope.menuButtonClicked = asideDisplayHelper(
    $scope, 
    $location, 
    asideOptions);


  $scope.navItemClicked = item => {

    setData(item.name);

  };


  function setData (name) {
    
    if (name === '') {

      return;
      
    }

    setPeople(getService(name));
    setSchema(name);

  }


  function getServiceNameFromPath () {

    return $location.path().replace(/\//g, '');

  }


  function getService (name) {

    return store[dashToCamel(name)];

  }


  function setSchema (name) {

    store.schemas()
      .then(schemas => $scope.$apply(() =>

        $scope.schema = schemas[dashToCamel(name)]));

  }


  function setPeople (service) {

    service()
      .then(people => {

        $scope.$apply( () =>
          $scope.people = people);

      });

  }


};


const config = (store) => ($location) => ({
  
  replace: true,
  template,
  link: link(store, $location)

});


export default (app, store) => {

  aside(app);
  article(app);

  app.directive('ecoApp', [ 
  
    '$location', 
    config(store) 

  ]);

};