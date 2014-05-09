angular.module('listManipulation', ['App.filters'])

.controller('ListCtrl', ['$scope', function ($scope) {
    $scope.selectedCompany = [];
    $scope.companyList = [{
        id: 1,
        name: 'Apple'
    }, {
        id: 2,
        name: 'Facebook'
    }, {
        id: 3,
        name: 'Google'
    }];

    $scope.clients = [{
        name: 'Brett',
        age: 33,
        designation: 'Software Engineer',
        company: {
            id: 1,
            name: 'Apple'
        }
    }, {
        name: 'Steven',
        age: 28,
        designation: 'Database Administrator',
        company: {
            id: 3,
            name: 'Google'
        }
    }, {
        name: 'Jim',
        age: 33,
        designation: 'Designer',
        company: {
            id: 2,
            name: 'Facebook'
        }
    }, {
        name: 'Michael',
        age: 28,
        designation: 'Front-End Developer',
        company: {
            id: 1,
            name: 'Apple'
        }
    }, {
        name: 'Josh',
        age: 33,
        designation: 'Network Engineer',
        company: {
            id: 3,
            name: 'Google'
        }
    }, {
        name: 'Ellie',
        age: 46,
        designation: 'Internet Marketing Engineer',
        company: {
            id: 1,
            name: 'Apple'
        }
    }];
}]);

angular.module('App.filters', []).filter('ageCountFilter', [function () {
  return function (clients) {
    var ages = {};
    var foo = [];
    angular.forEach(clients, function (client) {
      if (ages[client.age]){
        ages[client.age] += 1;
      } else {
          ages[client.age] = 1;
        }
    });
    for (var age in ages){
      foo.push({age: age, count: ages[age]});
    };
    return foo;
  }
}]);

// angular.module('App.filters', []).filter('avgAgeFilter', [function () {
//   return function (clients) {
//     var ages = {};
//     var foo = [];
//     angular.forEach(clients, function (client) {
//       if (ages[client.age]){
//         ages[client.age] += 1;
//       } else {
//           ages[client.age] = 1;
//         }
//     });
//     for (var age in ages){
//       foo.push({company: name, avg: ages[age]});
//     };
//     return foo;
//   }
// }]);

// angular.module('App.filters', []).filter('companyFilter', [function () {
//     return function (clients, selectedCompany) {
//         if (!angular.isUndefined(clients) && !angular.isUndefined(selectedCompany) && selectedCompany.length > 0) {
//             var tempClients = [];
//             angular.forEach(selectedCompany, function (id) {
//                 angular.forEach(clients, function (client) {
//                     if (angular.equals(client.company.id, id)) {
//                         tempClients.push(client);
//                     }
//                 });
//             });
//             return tempClients;
//         } else {
//             return clients;
//         }
//     };
// }]);