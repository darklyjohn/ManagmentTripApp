/**
 * Created by Jonathan on 30-01-15.
 */
'use strict';

mgmtTripApp.controller("mainController",function($scope, $location){
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
})