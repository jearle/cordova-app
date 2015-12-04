

import { expect } from 'chai';


import createScrollView from 'helpers/scrollview';


const template = `
<article>

  <section>

    <ul>

    </ul>

  </section>

</article>
`;


function create200ListItems () {

  const items = [];

  for (let i = 0 ; i < 200 ; i++) {

    items.push(`<li>${i}</li>`);

  }

  return items.join('\n');

}


function createElement () {

  const element = $(template);


  const css = {
    height: 100,
    overflow: 'scroll'
  };


  element

    .css(css);


  element.find('section')
    
    .css(css);

  return element;

}


describe.only('scrollview', function () {

  
  it('should', () => {

    const element = createElement();
    const section = element.find('section');
    const ul = section.find('ul');

    $('body').append(element);

    createScrollView(
      section,
      create200ListItems().split('\n'),
      (data) => {
        ul.html(data.join('\n'));
      }
    );

  });


});