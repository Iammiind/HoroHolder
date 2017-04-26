app.controller('convertLakkanaMapCtrl', function ($scope) {
    $scope.numberOne = '';
    $scope.numberTwo = '';
    $scope.numberThree = '';
    $scope.numberFour = '';
    $scope.numberFive = '';
    $scope.numberSix = '';
    $scope.numberSeven = '';
    $scope.numberEight = '';
    $scope.numberNine = '';
    $scope.numberTen = '';
    $scope.numberEleven = '';
    $scope.convert = false;

    $scope.lakkanaZodiacs = [
        {
            id: 1,
            label: 'Aries'
        },
        {
            id: 2,
            label: 'Taurus'
        },
        {
            id: 3,
            label: 'Gemini'
        },
        {
            id: 4,
            label: 'Cancer'
        },
        {
            id: 5,
            label: 'Leo'
        },
        {
            id: 6,
            label: 'Virgo'
        },
        {
            id: 7,
            label: 'Libra'
        },
        {
            id: 8,
            label: 'Scorpio'
        },
        {
            id: 9,
            label: 'Sagitarius'
        },
        {
            id: 10,
            label: 'Capricornus'
        },
        {
            id: 11,
            label: 'Aquarius'
        },
        {
            id: 12,
            label: 'Pisces'
        }
    ];
});
