

const $http = angular.injector(['ng']).get('$http');

export default () => $http
  .get('/api/schemas')
  .then((res) => res.data);