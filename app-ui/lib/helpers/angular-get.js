

/*
  
  Modules defaults to the use of the ng module.  This may be problematic if you
  need to use providers like $location which requires the application to have
  been bootstrapped.

*/

let injector = angular.injector(['ng']);


/*
  
  Exposes a setter to allow the setting of the injector specific to the bootstrap
  angular app for instance.

*/

export function setInjector ($injector) {

  injector = $injector;

}


/*
  
    Retrieves the service by provider name from the current injector instance.

*/

export default function injectorGet (providerName) {

  return injector.get(providerName);

}