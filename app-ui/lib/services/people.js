

const $http = angular.injector(['ng']).get('$http');

export default base => () => $http
  .get(`${base}/people`)
  .then((res) => res.data);