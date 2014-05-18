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