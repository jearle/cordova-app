

import createScrollView from '../../helpers/scrollview';


const template = require('fs').readFileSync(__dirname + '/index.html', 'utf8');


const link = () => ($scope, element) => {

  let scrollView;

  $scope.view = 'list';

  [ 'people', 
    'view' ]
    .forEach((property) => $scope.$watch(property, watcher));


  $scope.sortClicked = function (field) {
    
    sortPeople($scope.people, field);

    $scope.peopleToDisplay = scrollView
      .getDataSlice();

  };


  $scope.viewClicked = view =>

    $scope.view = view;


  function sortPeople (people, field) {

    return people.sort((person, nextPerson) => 
      person[field].localeCompare(nextPerson[field]));

  }


  function onScroll (isInit) {

    return (people) => {
  
      $scope.peopleToDisplay = people;
  
      if (!isInit) {
  
        $scope.$apply();
  
      } else {
  
        isInit = false;
  
      }
  
    };

  }


  function watcher () {

    const scrollElement = $('.' + $scope.view, element);

    scrollView = createScrollView(
      
      scrollElement, 
      $scope.people,
      onScroll(true));

  }

};


const config = () => () => ({
  
  scope: {

    menuButtonClicked: '&',
    people: '=',
    schema: '='

  },

  replace: true,
  template,
  link: link()

});


export default app => 
  app.directive('jseArticle', [ config() ]);