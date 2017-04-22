app.controller('convertLakkanaMapCtrl', function ($scope) {
    $scope.ariseSelected = [];
    $scope.piscesSelected = [];
    $scope.aquariusSelected = [];
    $scope.capricornusSelected = [];
    $scope.sagitariusSelected = [];
    $scope.scorpioSelected = [];
    $scope.libraSelected = [];
    $scope.virgoSelected = [];
    $scope.leoSelected = [];
    $scope.cancerSelected = [];
    $scope.geminiSelected = [];
    $scope.taurusSelected = [];
    $scope.statusConvert = false;

    $scope.lakkanaSetting = {
        displayProp: 'label'
    };
    $scope.lakkanaNumber = [
        {
            id: 1,
            label: '๑'
        },
        {
            id: 2,
            label: '๒'
        },
        {
            id: 3,
            label: '๓'
        },
        {
            id: 4,
            label: '๔'
        },
        {
            id: 5,
            label: '๕'
        },
        {
            id: 6,
            label: '๖'
        },
        {
            id: 7,
            label: '๗'
        },
        {
            id: 8,
            label: '๘'
        },
        {
            id: 9,
            label: '๙'
        },
        {
            id: 10,
            label: '๐'
        },
        {
            id: 11,
            label: 'ล'
        }
    ];
});
