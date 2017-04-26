app.controller('top3ZodiacsCtrl', function ($scope, LakkanaFactory) {
    $scope.top3Zodiacs = null;

    LakkanaFactory.getTop3Zodiacs().then(function (data) {
        $scope.top3Zodiacs = data.data;
    });
});
