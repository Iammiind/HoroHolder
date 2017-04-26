app.factory('LakkanaFactory', function LakkanaFactory ($http) {
    return {
        addTop3Zodiac: function (id) {
            return $http({
                method: 'GET',
                url: 'addLakkanaZodiac.php?id=' + id
            });
        },

        getTop3Zodiacs: function () {
            return $http({
                method: 'GET',
                url: 'getTop3.php'
            });
        }
    };
});
