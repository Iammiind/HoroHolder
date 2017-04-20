app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'app/lakkanaMap/index.html',
        controller: 'mainCtrl'
    })
    .when('/convertLakkanaMap', {
        templateUrl: 'app/convertLakkanaMap/index.html'
    })
    .when('/convertMappingOfStar', {
        templateUrl: 'app/convertMappingOfStar/index.html'
    })
    .when('/findoutLakkanaZodiacs', {
        templateUrl: 'app/findoutLakkanaZodiacs/index.html'
    })
    .when('/transportation', {
        templateUrl: 'app/transportation/index.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});
