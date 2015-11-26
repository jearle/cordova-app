

const $http = angular.injector(['ng']).get('$http');

export default () => $http
  .get('/api/navigation')
  .then((res) => res.data);