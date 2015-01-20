/**
 * Created by Jonathan on 08-01-15.
 */
"use strict";

//var mgmtTripApp = angular.module('app',['ngRoute','controllers','ui.bootstrap', 'tripService']);
var mgmtTripApp = angular.module('app',['ngRoute','ui.bootstrap']);
mgmtTripApp.config(function($routeProvider){
        $routeProvider.when('/trip',{
            templateUrl: 'js/Trip/trip.html',
            controller: 'TripCtrl'
        });
        $routeProvider.when('/home',{
            templateUrl: 'js/home/home.html',
            controller: 'HomeCtrl'
        });
        $routeProvider.when('/detail/:tripid',{
            templateUrl: 'js/Trip/detail.html',
            controller: 'TripDetailCtrl',
            resolve:{
                'trip':function($route){
            return $route.current.params.tripid;
        }
            }
        });
        $routeProvider.otherwise({
            redirectTo: '/home'
        })
    })