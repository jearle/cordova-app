

import app from '../app';
import createScrollView from '../helpers/scrollview';


const template = `

  <article>


    <header>
      
      <button ng-click="menuButtonClicked()">

        hide

      </button>

    </header>


    <section ng-if="people.length == 0">

      Please select a set of people.

    </section>


    <section>

      <p>

        view with 

      </p>

      <button
        ng-click="viewClicked('list')">

        list

      </button>

      <button
        ng-click="viewClicked('form')">

        forms

      </button>

    </section>


    <section>

      <p>

        sort by

      </p>

      <ul
        class="schema">

        <li
          class="field"
          ng-repeat="field in schema">

          <button
            ng-click="sortClicked(field)">
  
            {{ field }}

          </button>

        </li>

      </ul>

    </section>


    <section 
      class="list"
      ng-if="view == 'list'">
      
      <ul>

        <li 
          ng-repeat="person in peopleToDisplay">

          <ul
            class="schema">

            <li
              class="field" 
              ng-repeat="field in schema">

              {{ person[field] }}

            </li>

          </ul>

        </li>

      </ul>

    </section>


    <section
      class="form"
      ng-if="view == 'form'">
      
      <ul>

        <li ng-repeat="person in peopleToDisplay">

          <form>

            <label
              class="field" 
              ng-repeat="field in schema">

              {{ field }}

              <input ng-model="person[field]" />

            </label>

          </form>

        </li>

      </ul>

    </section>


  </article>

`;


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


const config = () => $timeout => ({
  
  scope: {

    menuButtonClicked: '&',
    people: '=',
    schema: '='

  },

  replace: true,
  template,
  link: link($timeout)

});


export default () => app.directive('jseArticle', [ '$timeout', config() ]);