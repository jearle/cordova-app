

const template = require('fs').readFileSync(__dirname + '/index.html', 'utf8');


const link = () => () => {};


const config = () => () => ({
  
  scope: {
    
    closed: '=',
    open: '=',
    navigation: '=',
    navItemClicked: '&'

  },

  replace: true,
  template,
  link: link()

});


export default app => app.directive('jseAside', [ config() ]);