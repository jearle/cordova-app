

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

  return items;

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

/*

  Creates and scrolls a scroll view, on scroll to index it calls a callback
  that takes the data, firstChild, height of first child, and margin top
  of the UL element to run tests against.

  The function removes the element after it calls the callback.

  @param {array} seedData An array of valid HTML LI elements.
  @param {number} scrollIndex an index to scroll to in the scroll view.
  @param {function} callback Takes the data from the scroll view callback call,
    the first child element, the height of the first child and the margin top
    of the UL element.

  
*/

function scrollAScrollView (seedData, scrollIndex, callback) {

  const element = createElement();
  const section = element.find('section');
  const ul = section.find('ul');

  let height = null;

  $('body').append(element);

  createScrollView(
    section,
    seedData,
    (data) => {
      
      ul.html(data.join('\n'));

      const firstChild = $(ul.find('li')[0]);
      
      if (!height) {

        height = firstChild.height();
        section.scrollTop(height * scrollIndex);
        

      } else {

        callback(
          data, 
          firstChild, 
          height, 
          parseInt(ul.css('margin-top')));

        element.remove();

      }
      

    });

}


describe('scrollview', function () {

  
  const index = 3;
  let seedData;


  beforeEach(() =>
    seedData = create200ListItems());


  it('should have a first element equal to the seedData item at index.', () =>

    scrollAScrollView(seedData, index,
      (data) =>

        expect(data[0])
          .to.equal(seedData[index])));


  it('the firstElement should equal seedData at index ', () =>

    scrollAScrollView(seedData, index,
      (data, firstElement) => 

        expect(firstElement[0].outerHTML)
          .to.equal(seedData[index])));


  it('the margin top should be equal to the height of the first element multiplied by the index', () =>

    scrollAScrollView(seedData, index,
      (data, firstElement, height, marginTop) =>

        expect(height * index)
          .to.equal(marginTop)));


});