

import createScrollView from '../../helpers/scrollview';


const template = require('fs').readFileSync(__dirname + '/index.html', 'utf8');

const link = $timeout => ($scope, element) => {


  let scrollView;


  $scope.view = 'list';


  $scope.$watch('people', watcher);
  $scope.$watch('view', watcher);


  function watcher () {

    const scrollElement = $('.' + $scope.view, element);

    scrollView = createScrollView(
      
      scrollElement, 
      $scope.people,

      (people) => 
        $timeout(() =>
          $scope.peopleToDisplay = people));

  }


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

};


const config = () => ($timeout) => ({
  
  scope: {

    menuButtonClicked: '&',
    people: '=',
    schema: '='

  },

  replace: true,
  template,
  link: link($timeout)

});


export default app => 
  app.directive('jseArticle', [ '$timeout', config() ]);