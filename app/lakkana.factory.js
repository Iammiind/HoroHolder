app.factory('LakkanaFactory', function LakkanaFactory ($http) {
    return {
        addTop3Zodiac: function (id) {
            return $http({
                method: 'GET',
                url: 'http://localhost/HoroHolder-BackEnd/addLakkanaZodiac.php?id=' + id
            });
        },

        getTop3Zodiacs: function () {
            return $http({
                method: 'GET',
                url: 'http://localhost/HoroHolder-BackEnd/getTop3.php'
            });
        }
    };
});
