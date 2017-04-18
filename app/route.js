app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'app/main/index.html',
        controller: 'mainCtrl'
    });
    // .when('/london', {
    //     templateUrl: 'london.htm',
    //     controller: 'londonCtrl'
    // })
    // .when('/paris', {
    //     templateUrl: 'paris.htm',
    //     controller: 'parisCtrl'
    // });
});
