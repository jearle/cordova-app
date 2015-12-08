

const $http = angular.injector(['ng']).get('$http');

export default base => () => $http
  .get(`${base}/navigation`)
  .then((res) => res.data);