angular.module('App.filters', []).filter('ageCountFilter', [function () {
  return function (clients) {
    var numOfAges = {};
    var countOfAges = [];
    angular.forEach(clients, function (client) {
      if (numOfAges[client.age]){
        numOfAges[client.age] += 1;
      } else {
          numOfAges[client.age] = 1;
        }
    });
    for (var age in numOfAges){
      countOfAges.push({age: age, count: numOfAges[age]});
    };
    return countOfAges;
  }
}]);