

import app from '../app';


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


const link = () => ($scope, element) => {


  $scope.view = 'form';


  $scope.$watch('people', watcher);
  $scope.$watch('view', watcher);


  $scope.sortClicked = function (field) {

    sortPeople($scope.people, field);

    const index = getIndex(getScrollElement());

    $scope.peopleToDisplay = peopleSlice(index);

  };


  $scope.viewClicked = view =>

    $scope.view = view;


  function watcher () {

    $scope.peopleToDisplay = peopleSlice();
    hookUpScrollEvent(getScrollElement());

  }


  function sortPeople (people, field) {

    return people.sort((person, nextPerson) => 
      person[field].localeCompare(nextPerson[field]));

  }


  function peopleSlice (index) {

    if (!index) {

      index = 0;

    }

    return $scope.people.slice(0 + index, 110 + index);

  }
  

  function hookUpScrollEvent (scrollElement) {

    scrollElement
      .unbind('scroll')
      .scroll(onScroll(scrollElement));

  }


  function onScroll (scrollElement) {

    return () =>
      reRenderView(scrollElement);

  }


  function reRenderView (scrollElement) {

    $scope.peopleToDisplay = peopleSlice(getIndex(scrollElement));
    
    getListContainer(scrollElement)
      .css(getMarginCss(scrollElement));

    $scope.$apply();

  }


  function getMarginCss (scrollElement) {

    const firstChildHeight = getFirstChildHeight(scrollElement);

    return {
      
      'margin-top': getIndex(scrollElement) * firstChildHeight

    };

  }


  function getIndex (scrollElement) {

    return Math.floor(scrollElement.scrollTop() / getFirstChildInScrollView(scrollElement).height());

  }


  function getFirstChildHeight (scrollElement) {

    return getFirstChildInScrollView(scrollElement).height();

  }


  function getFirstChildInScrollView (scrollElement) {

    return $(scrollElement.find('li')[0]);

  }


  function getScrollElement () {

    return $('.' + $scope.view, element);

  }


  function getListContainer (scrollElement) {

    return $($(scrollElement).children()[0]);

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


export default () => app.directive('jseArticle', [ config() ]);