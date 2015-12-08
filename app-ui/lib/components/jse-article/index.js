

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


  function watcher () {

    const scrollElement = $('.' + $scope.view, element);

    // Used to determine whether or not this is the
    // initial firing of the watcher.  Wrapping the
    // peopleToDisplay setter in a safe apply ($timeout)
    // results in a slower rendering causing frame
    // lag in the browser.
    let isInit = true;

    scrollView = createScrollView(
      
      scrollElement, 
      $scope.people,

      (people) => {

        $scope.peopleToDisplay = people;

        if (!isInit) {

          $scope.$apply();

        } else {

          isInit = false;

        }

      });

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