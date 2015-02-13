/**
 * Created by Jonathan on 30-01-15.
 */
'use strict';

mgmtTripApp.controller('TripDetailCtrl', ['trip', '$scope', 'tripList','activityService', function (trip, $scope, tripList,activityService) {
    //$scope.trip = tripList.getTripById(trip);
    $scope.currentTrip = tripList.getTripById(trip);
    //$scope.trip = trips.filter(function(el){
    //     return el.id != trip;
    //});
    var arr = [1, 2, 3, 4, 5];
    $scope.trip = arr.filter(function(val) {
        return 0 != val % 2;
    });


    $scope.activities = activityService.getActivitiesByTrip(trip);
}]);