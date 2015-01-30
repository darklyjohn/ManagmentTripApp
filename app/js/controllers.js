/**
 * Created by Jonathan on 17-01-15.
 */
'use strict';

//angular.module('controllers', ['tripService'])
mgmtTripApp.filter('rangeFilter', function () {
        return function (items, rangeInfo) {
            var filtered = [];
            var aDate = rangeInfo == undefined ? 0 : Date.parse(rangeInfo.date);
            var min = rangeInfo == undefined ? 0 : parseInt(rangeInfo.date);
            //var max = parseInt(rangeInfo.userMax);
            // If time is with the range
            angular.forEach(items, function (item) {
                //if( item.time >= min && item.time <= max ) {
                if (item.date = min) {
                    filtered.push(item);
                }
            });
            return filtered;
        };
    });
//mgmtTripApp.controller('TripCtrl', [ '$scope', 'tripList', function ($scope, tripList) {
//
//
//        $scope.trips = tripList.getTripList();
//        $scope.today = function () {
//            $scope.dt = new Date();
//        };
//        $scope.today();
//
//        $scope.clear = function () {
//            $scope.dt = null;
//        };
//
//        // Disable weekend selection
//        $scope.disabled = function (date, mode) {
//            return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
//        };
//
//        $scope.toggleMin = function () {
//            $scope.minDate = $scope.minDate ? null : new Date();
//        };
//        $scope.toggleMin();
//
//        $scope.open = function ($event) {
//            $event.preventDefault();
//            $event.stopPropagation();
//
//            $scope.opened = true;
//        };
//
//        $scope.dateOptions = {
//            formatYear: 'yy',
//            startingDay: 1
//        };
//
//        $scope.formats = ['dd/MM/yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
//        $scope.format = $scope.formats[0];
//
//        $scope.myselectdate = $scope.dt
//
//
//    }]);

mgmtTripApp.controller('HomeCtrl', function () {

    });
mgmtTripApp.controller('TripDetailCtrl', ['trip', '$scope', 'tripList', function (trip, $scope, tripList) {
        //$scope.trip = tripList.getTripById(trip);
   var trips = tripList.getTripList();
   //$scope.trip = trips.filter(function(el){
   //     return el.id != trip;
   //});
    var arr = [1, 2, 3, 4, 5];
    $scope.trip = arr.filter(function(val) {
        return 0 != val % 2;
    });
    }]);