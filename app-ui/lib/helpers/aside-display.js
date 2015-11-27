  

/*

  This class is used to assist in managing the state of the open/close search params
  that are dependent upon whether or not the app is in mobile or desktop mode.

  Additionally, it manages the window resize event by clearing out all the search
  params and reseting the isAsideClosed and isAsideOpen params to their default
  values of false.

*/

class AsideDisplay {


  constructor ($scope, $location, options) {
    
    this.$scope = $scope;
    this.$location = $location;

    if (!options.element)
      throw `AsideDisplay requires an options.element got options: ${JSON.stringify(options)}`;

    this.element = options.element;
    this.mobileWidth = options.mobileWidth || 728;

    this.element.resize(this.reset.bind(this));

  }


  /*

    Clears both search params from location aside-closed and aside-open.  It also resets
    the default scope values of isAsideClosed and isAsideOpne to false.
  
  */

  reset () {

    this.$scope.$apply(() => {
      
      this.clearSearchParams(['aside-closed', 'aside-open']);
      this.$scope.isAsideClosed = false;
      this.$scope.isAsideOpen = false;

    });

  }


  /*
  
    Calls the proper toggle dependent upon the browser window size.  Currently
    sub 728px is the hardcoded value for a mobile browser.

  */

  toggleAside () {

    if (this.element.width() > this.mobileWidth) {

      this.toggleIsAsideClosed();
      this.toggleAsideClosedSearchParam();

    } else {

      this.toggleIsAsideOpen();
      this.toggleIsAsideOpenSearchParam();

    }

  }


  /*
    
    Toggles the scope property isAsideClosed.  Should only be called
    when the browser is above mobile widths.

  */

  toggleIsAsideClosed () {

    this.$scope.isAsideClosed = !this.$scope.isAsideClosed;

  }


  /*
    
    Toggles the search params in the URL bar aside-closed.  Should only be called
    when the browser is above mobile widths.

  */

  toggleAsideClosedSearchParam () {

    this.toggleSearchParam('aside-closed');

  }


  /*
    
    Toggles the scope property isAsideOpen.  Should only be called
    when the browser is below mobile widths.

  */

  toggleIsAsideOpen () {

    this.$scope.isAsideOpen = !this.$scope.isAsideOpen;

  }


  /*
    
    Toggles the search params in the URL bar aside-open.  Should only be called
    when the browser is below mobile widths.

  */

  toggleIsAsideOpenSearchParam () {

    this.toggleSearchParam('aside-open');

  }


  /*
  
    Conditionally adds or removes the named param from the search params
    object in the location search.

  */

  toggleSearchParam(name) {

    const search = this.$location.search();

    search[name] ? delete search[name] : search[name] = true;

    this.$location.search(search);

  }


  /*
  
    Clears all search params relating to the aside being open or closed.  The current
    search params are aside-open and aside closed.

  */
  
  clearSearchParams (params) {

    const search = this.$location.search();

    params
      .forEach((param) =>
        delete search[param]);

    this.$location.search(search);


  }


}


/*
  
  Binds and exposes the toggle aside method of the AsideDipslay class.

*/
export default function asideDisplayHelper ($scope, $location, options)  {

  const asideDisplay = new AsideDisplay($scope, $location, options);

  const toggleAside = asideDisplay.toggleAside.bind(asideDisplay);

  toggleAside.reset = asideDisplay.reset.bind(asideDisplay);

  return toggleAside;

}