/**
 * Created by Jonathan on 17-01-15.
 */
'use strict';

angular.module('controllers', [])
    .controller('TripCtrl', function ($scope) {
        $scope.trips = [{
            "id": "0",
            "country": "Hungary",
            "town": "Budapest",
            "date": "18/02/2015"
        },
            {
                "id": "1",
                "country": "Hungary",
                "town": "Budapest",
                "date": "19/02/2015"
            },
            {
                "id": "1",
                "country": "Portugal",
                "town": "Porto",
                "date": "07/04/2015"
            }
        ];


        $scope.today = function () {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function () {
            $scope.dt = null;
        };

        // Disable weekend selection
        $scope.disabled = function (date, mode) {
            return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
        };

        $scope.toggleMin = function () {
            $scope.minDate = $scope.minDate ? null : new Date();
        };
        $scope.toggleMin();

        $scope.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = true;
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        $scope.formats = ['dd/MM/yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];

        $scope.myselectdate = $scope.dt


    })

    .controller('HomeCtrl', function () {

    })