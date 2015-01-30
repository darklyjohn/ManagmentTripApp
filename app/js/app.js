/**
 * Created by Jonathan on 08-01-15.
 */
"use strict";

var mgmtTripApp = angular.module('app', [ 'ui.bootstrap', 'ui.grid', 'ui.router']);

mgmtTripApp.run(['$state','$log','tripList',function($state, $log, tripList){
    $log.log('Application start')
}])

mgmtTripApp.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('trip', {
            url: 'trip',
            views: {
                '': {
                    templateUrl: "js/Trip/trip.html",
                    controller: "TripController"
                }
            }
        })
        .state('home', {
            url: 'home',
            views: {
                '': {
                    templateUrl: "js/home/home.html",
                    controller: "HomeController"
                }
            }

        })
        .state('detail', {
            url: 'detail/:tripid',
            views: {
                '': {
                    templateUrl: 'js/Trip/detail.html',
                    controller: 'TripDetailCtrl',
                    resolve: {
                        trip: ['$stateParams',function ($stateParams) {
                            return $stateParams.tripid;
                        }]
                    }
                }

            }
        })
    //$routeProvider.otherwise({
    //    redirectTo: '/home'
    //})


}]);