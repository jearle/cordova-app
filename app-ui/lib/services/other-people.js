

const $http = angular.injector(['ng']).get('$http');

export default () => $http
  .get('/api/other-people')
  .then((res) => res.data);