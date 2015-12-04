

class ScrollView {


  constructor (element, data, callback) {

    this.element = element;
    this.setData(data);

    this.callback = callback;
    this.setupScroll();
    this.update();

  }

  setupScroll () {

    this.element
      .unbind('scroll')
      .scroll(this.update.bind(this));

  }


  update () {
    
    this.updateMargin();
    this.callback(this.getDataSlice());


  }


  updateMargin () {

    this
      .getListContainer()
      .css(this.getTopMargin());

  }


  setData (data) {
    
    this.data = data;

  }


  getIndex () {

    return Math
      .floor(this.getScrollTop() / this.getChildHeight());

  }


  getElementFirstChild () {

    return $(this.element.find('li')[0]); 

  }


  getChildHeight () {

    return this
      .getElementFirstChild()
      .height();

  }


  getScrollTop () {

    return this
      .element
      .scrollTop();

  }


  getDataSlice () {

    const index = this.getIndex() || 0;

    return this.data.slice(0 + index, 110 + index);

  }


  getTopMargin () {

    return {
      'margin-top': this.getIndex() * this.getChildHeight()
    };

  }


  getListContainer () {

    return  $($(this.element).children()[0]);

  }


}

export default function createScrollView (element, data, callback) {

  const scrollView = new ScrollView(element, data, callback);

  return scrollView;

}