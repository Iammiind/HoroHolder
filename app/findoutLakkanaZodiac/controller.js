app.controller('findoutLakkanaZodiac', function ($scope, LakkanaFactory) {
    $scope.dateSelected = 0;
    $scope.timeSelected = 0;
    $scope.stateButton = false;
    $scope.arrayZodiacs = {
        'Aries': 1,
        'Taurus': 2,
        'Gemini': 3,
        'Cancer': 4,
        'Leo': 5,
        'Virgo': 6,
        'Libra': 7,
        'Scorpio': 8,
        'Sagittarius': 9,
        'Capricorn': 10,
        'Aquarius': 11,
        'Pisces': 12
    };

    $scope.arrayZodiacsMapping = [
        ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius' ],
        ['Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'],
        ['Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius'],
        ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
        ['Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces', 'Aries'],
        ['Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'พฤกษ'],
        ['Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini'],
        ['Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'กรกฎ'],
        ['Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo'],
        ['Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo'],
        ['Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra'],
        ['Sagittarius', 'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio']
    ];

    $scope.characteristic = {
        'Aries': 'Adventurous ,Energetic ,Pioneering ,Courageous ,Enthusiastic ,Confident ,Dynamic ,Quick-witted ,Selfish ,Quick-tempered ,Impulsive ,ImpatientFoolhardy and Daredevil',
        'Taurus': 'Patient ,Reliable ,Warmhearted ,loving ,Persistent ,Determined ,Placid ,Security loving ,Jealous Possessive ,Resentful ,Inflexible ,Self-indulgent and Greedy',
        'Gemini': 'Adaptable ,Versatile ,Communicative ,witty ,Intellectual ,Eloquent ,Youthful ,Lively ,Nervous ,Tense ,Superficial ,Inconsistent ,Cunning and Inquisitive ',
        'Cancer': 'Emotional ,Loving ,Intuitive ,Imaginative ,Shrewd ,Cautious ,Protective ,Sympathetic ,Changeable ,moody ,Overemotional ,touchy ,Clinging and Unable to let go',
        'Leo': 'Generous ,Warmhearted ,Creative ,Enthusiastic ,Broad-minded ,Expansive ,Faithful ,Loving ,Pompous ,Patronizing ,Bossy ,Interfering ,Dogmatic and Intolerant ',
        'Virgo': 'Modest ,Shy ,Meticulous ,Reliable ,Practical ,Diligent ,Intelligent ,Analytical ,Fussy ,A worrier ,Overcritical ,Harsh Perfectionist and Conservative',
        'Libra': 'Diplomatic ,Urbane ,Romantic ,Charming ,Easygoing ,Sociable ,Idealistic ,Peaceable ,Indecisive ,Changeable ,Gullible ,Easily influenced ,Flirtatious and Self-indulgent',
        'Scorpio': 'Determined ,Forceful ,Emotional ,Intuitive ,Powerful ,Passionate ,Exciting ,Magnetic ,Jealous ,Resentful ,Compulsive ,Obsessive ,Secretive and Obstinate',
        'Sagittarius': 'Optimistic ,Freedom-loving ,Jovial ,Good-humored ,Honest ,Straightforward ,Intellectual ,Philosophical ,Blindly optimistic ,careless ,Irresponsible ,superficial ,Tactless and Restless',
        'Capricorn': 'Practical ,Prudent ,Ambitious ,Disciplined ,Patient ,Careful ,Humorous ,Reserved ,Pessimistic ,fatalistic ,Miserly and Grudging',
        'Aquarius': 'Friendly ,Humanitarian ,Honest ,Loyal ,Original ,Inventive ,Independent ,Intellectual ,Intractable ,Contrary ,Perverse ,Unpredictable ,Unemotional and Detached',
        'Pisces': 'Imaginative ,Sensitive ,Compassionate ,Kind ,Selfless ,Unworldly ,Intuitive ,Sympathetic ,Escapist ,Idealistic ,Secretive ,Vague ,Weak-willed and Easily led'
    };

    $scope.characterShare = $scope.arrayZodiacsMapping[$scope.dateSelected][$scope.timeSelected] + ' - ' + $scope.characteristic[$scope.arrayZodiacsMapping[$scope.dateSelected][$scope.timeSelected]];

    $scope.arrayDate = [
        {
            date: '15JAN-12FEB'
        },
        {
            date: '13FEB-13MAR'
        },
        {
            date: '14MAR-12APR'
        },
        {
            date: '13APR-13MAY'
        },
        {
            date: '14MAY-13JUN'
        },
        {
            date: '14JUN-14JUL'
        },
        {
            date: '15JUL-16AUG'
        },
        {
            date: '17AUG-16SEP'
        },
        {
            date: '17SEP-16OCT'
        },
        {
            date: '17OCT-15NOV'
        },
        {
            date: '16NOV-15DEC'
        },
        {
            date: '16DEC-14JAN'
        }
    ];
    $scope.arrayTime = [
        {
            time: '05.00-07.00'
        },
        {
            time: '07.00-09.00'
        },
        {
            time: '09.00-11.00'
        },
        {
            time: '11.00-13.00'
        },
        {
            time: '13.00-15.00'
        },
        {
            time: '15.00-17.00'
        },
        {
            time: '17.00-19.00'
        },
        {
            time: '19.00-21.00'
        },
        {
            time: '21.00-23.00'
        },
        {
            time: '23.00-01.00'
        },
        {
            time: '01.00-03.00'
        },
        {
            time: '03.00-05.00'
        }
    ];

    $scope.addTop3Zodiac = function () {
        $scope.stateButton = true;
        var id = $scope.arrayZodiacs[$scope.arrayZodiacsMapping[$scope.dateSelected][$scope.timeSelected]];
        LakkanaFactory.addTop3Zodiac(id);
    };
});
