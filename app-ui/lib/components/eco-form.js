

import app from '../app';


const template = `
  
  <div>

    <form ng-repeat="person in peopleDisplay">

      <label ng-repeat="field in schema">

        {{ field }}

        <input ng-model="person[field]" />

      </label>

      <hr />

    </form>

  </div>
  
`;

export default

  app
    .directive('ecoForm', [

      function () {

        return {

          replace: true,

          scope: {

            people: '=',
            schema: '='

          },

          template,

          link ($scope, element) {
  

            $scope.$watch('people', function () {

              $scope.peopleDisplay = [$scope.people[0]];
              $scope.people.forEach(function (person) {
                console.log(person.name);
              });
              calculateHeight();

            });


            function calculateHeight () {

              setTimeout(function () {
                
                const parent = element.parent();
                const div = parent.find('div');
                const form = parent.find('form');


                if (!form) {
                  return calculateHeight();
                }

                const height = form.height() + 10;
                const totalHeight = $scope.people.length * height;
                console.log(parent.height());
                // const el = $('<div></div>');
                div.css({
                  height: totalHeight
                });

                const article = parent.parent().parent();

                article.scroll(function (event) {
                  
                  const index = Math.floor(article.scrollTop() / height);
                  const range = Math.ceil(1019/239);

                  $scope.$apply(function () {
                    
                    div.css({
                      marginTop: height * index,
                      height: totalHeight - (height * index)
                    });


                    $scope.peopleDisplay = [];

                    let lastIndex = index + range;
                    
                    if (lastIndex >= $scope.people.length) {
                      lastIndex = $scope.people.length;
                    }
                    console.log(lastIndex);

                    for (var i = index ; i < lastIndex ; i++ ) {
                      
                      $scope.peopleDisplay.push(
                        $scope.people[i]
                      );

                    }

                    

                  });

                });
                
              }, 16);
              

            }


          }

        };

      }

    ]);