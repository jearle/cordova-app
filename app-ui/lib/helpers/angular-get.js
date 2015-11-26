

let injector = angular.injector(['ng']);


function injectorGet (providerName) {

  return injector.get(providerName);

}


export function setInjector ($injector) {

  injector = $injector;

}


export default injectorGet;