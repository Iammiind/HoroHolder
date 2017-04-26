app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'app/mainPage/index.html'
    })
    .when('/convertLakkanaMap', {
        templateUrl: 'app/convertLakkanaMap/index.html'
    })
    .when('/convertMappingOfStar', {
        templateUrl: 'app/convertMappingOfStar/index.html'
    })
    .when('/findoutLakkanaZodiac', {
        templateUrl: 'app/findoutLakkanaZodiac/index.html'
    })
    .when('/transportation', {
        templateUrl: 'app/transportation/index.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});
