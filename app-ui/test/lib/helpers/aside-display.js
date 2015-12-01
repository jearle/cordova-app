

import { expect } from 'chai';


import asideDisplayHelper from 'helpers/aside-display';


function getWidthedElement (width) {

  const element = $('<div></div>');

  element
    .css('width', width);

  return element;

}


function getMobileWidthElement () {

  return getWidthedElement(600);

}


function getDesktopWidthElement () {

  return getWidthedElement(1000);

}


function getLocationMock (searchParams) {

  return {

    search (params) {

      if (params) {
      
        Object.assign(searchParams, params);

      }

      return searchParams;

    }

  };

}


function getDefaultSearchParams () {

  return {

    'aside-closed': false,
    'aside-open': false

  };

}


function getDefaultScope () {

  return {

    isAsideOpen: false,
    isAsideClosed: false,

    $apply: callback => callback()

  };

}


function getOptions (element) {

  return {

    element: element,
    mobileWidth: 728

  };

}


function getMobileOptions () {

  return getOptions(getMobileWidthElement());

}


function getDesktopOptions () {

  return getOptions(getDesktopWidthElement());

}


function getToggleAside (options) {

  const searchParams = getDefaultSearchParams();
      
  const scope    = getDefaultScope();
  const location = getLocationMock(searchParams);

  const toggleAside = asideDisplayHelper(
    scope, 
    location, 
    options);

  return {

    scope,
    searchParams,

    reset () {

      toggleAside.reset();

      return this;

    },

    call () {

      toggleAside();

      return this;

    }

  };


}


function getMobileToggleAside () {

  return getToggleAside(getMobileOptions());

}


function getDesktopToggleAside () {

  return getToggleAside(getDesktopOptions());

}


function toggleMobileAside () {

  return getMobileToggleAside().call();

}


function toggleDesktopAside () {

  return getDesktopToggleAside().call();

}


describe('asideDisplay', function () {


  describe('mobile', function () {


    it(`toggled aside should isAsidedClosed should remain false`, () => 

      expect(toggleMobileAside().scope.isAsideClosed).to.equal(false));


    it(`toggled aside searchParams 'aside-closed' remain false`, () => 

      expect(toggleMobileAside().searchParams['aside-closed']).to.equal(false));


    it(`toggled aside should set isAsideOpen to true`, () =>

      expect(toggleMobileAside().scope.isAsideOpen).to.equal(true));


    it(`toggled aside should set 'aside-open' to true`, () => 

      expect(toggleMobileAside().searchParams['aside-open']).to.equal(true));


    it(`should reset mobile values`, () => {


      expect(toggleMobileAside().reset().scope.isAsideOpen).to.equal(false);
      expect(toggleMobileAside().reset().searchParams['aside-open']).to.equal(undefined);

    });


  });


  describe('desktop', function () {


    it(`toggled aside isAsideOpen should remain false`, () => 

      expect(toggleDesktopAside().scope.isAsideOpen).to.equal(false));


    it(`toggled aside searchParams 'aside-open' should remain false`, () => 

      expect(toggleDesktopAside().searchParams['aside-open']).to.equal(false));


    it(`toggled aside should set isAsideClosed to true`, () =>

      expect(toggleDesktopAside().scope.isAsideClosed).to.equal(true));


    it(`toggled aside should set 'aside-closed' to true`, () => 

      expect(toggleDesktopAside().searchParams['aside-closed']).to.equal(true));


    it(`should reset desktop values`, () => {


      expect(toggleDesktopAside().reset().scope.isAsideClosed).to.equal(false);
      expect(toggleDesktopAside().reset().searchParams['aside-closed']).to.equal(undefined);

    });


  });


});