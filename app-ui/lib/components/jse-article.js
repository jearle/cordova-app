

import app from '../app';


const template = `

  <article>

    <header>
      
      <button ng-click="menuButtonClicked()">

        hide

      </button>

    </header>

    <section>
      hi
    </section>

  </article>

`;


const link = () => () => {
  

};


const config = () => () => ({
  
  scope: {

    menuButtonClicked: '&'

  },

  replace: true,
  template,
  link: link()

});


export default () => app.directive('jseArticle', [ config() ]);