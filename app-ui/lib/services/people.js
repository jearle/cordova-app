

const $http = angular.injector(['ng']).get('$http');

export default () => $http
  .get('/api/people')
  .then((res) => res.data);