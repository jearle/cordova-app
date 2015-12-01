

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


  $scope.view = 'list';


  $scope.$watch('people', _ => {
  
    $scope.peopleToDisplay = $scope.people.slice(0, 50);
    hookUpScrollEvent(getScrollElement());


  });


  $scope.sortClicked = function (field) {

    $scope.people.sort(function (x, y) {
      return x[field].localeCompare(y[field]);
    });

    const index = getIndex(getScrollElement());
    console.log(index);

    $scope.peopleToDisplay = $scope.people.slice(0 + index, 50 + index);

  };


  $scope.viewClicked = view =>

    $scope.view = view;
  

  function hookUpScrollEvent (scrollElement) {

    scrollElement
      .unbind('scroll')
      .scroll(() => {

        const firstChildHeight = getFirstChildHeight(scrollElement);
        const index = getIndex(scrollElement);

        $scope.peopleToDisplay = $scope.people.slice(0 + index, 50 + index);
        $($(scrollElement).children()[0]).css({'margin-top': (index * firstChildHeight) + 'px' })
        $scope.$apply();

      });

  }


  function getIndex (scrollElement) {

    return Math.floor(scrollElement.scrollTop() / getFirstChildInScrollView(scrollElement).height());

  }


  function getFirstChildHeight (scrollElement) {

    return getFirstChildInScrollView(scrollElement).height();

  }


  function getFirstChildInScrollView (scrollElement) {

    if ($scope.view === 'list') {
      
      return $(scrollElement.find('li')[0]);

    }

  }


  function getScrollElement () {

    return $('.' + $scope.view, element);

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