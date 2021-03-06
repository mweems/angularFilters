angular.module('App.filters', []).filter('avgAgeFilter', [function () {
  return function (clients) {
    var companyTotalAges = {};
    var companyNumAges = {};
    var avgAges = {};
    var avgCompanyAges = [];
    
    angular.forEach(clients, function (client) {
      if (companyTotalAges[client.company.name]){
        companyTotalAges[client.company.name] += client.age;
      } else {
          companyTotalAges[client.company.name] = client.age;
        }
      if (companyNumAges[client.company.name]){
        companyNumAges[client.company.name] += 1;
      } else {
          companyNumAges[client.company.name] = 1;
        }
    });

//try using hash value access to make this one loop
    angular.forEach(companyTotalAges, function (totAges, ageCompany){
      angular.forEach(companyNumAges, function (numAges, numCompany){
        if (ageCompany == numCompany){
          avgAges[ageCompany] = totAges/numAges;
        }
      })
    });

    for (var company in avgAges){
      avgCompanyAges.push({company: company, avg: avgAges[company]});
    };
    return avgCompanyAges;
  }
}]);