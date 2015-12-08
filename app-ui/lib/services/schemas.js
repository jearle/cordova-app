

const $http = angular.injector(['ng']).get('$http');

export default base => () => $http
  .get(`${base}/schemas`)
  .then((res) => res.data);