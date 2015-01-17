/**
 * Created by Jonathan on 08-01-15.
 */
"use strict";

angular.module('app',['ngRoute','controllers','ui.bootstrap'])
.config(function($routeProvider){
        $routeProvider.when('/trip',{
            templateUrl: 'js/Trip/trip.html',
            controller: 'TripCtrl'
        });
        $routeProvider.when('/home',{
            templateUrl: 'js/home/home.html',
            controller: 'HomeCtrl'
        });
        $routeProvider.otherwise({
            redirectTo: '/home'
        })
    })