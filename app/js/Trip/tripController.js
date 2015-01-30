'use strict';

mgmtTripApp.controller("TripController", ['$scope', 'tripList', 'uiGridConstants', '$state', function ($scope, tripList, uiGridConstants, $state) {


    $scope.trips = tripList.getTripList();
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


    $scope.load = function () {
        $scope.trips = tripList.getTripList();
        $scope.gridOptions.data = $scope.trips;
    }

    $scope.tableScope = {
        moreDetails: function (id) {

            $state.go("detail", {'tripid': id});
        }

    };

    $scope.gridOptions = {};
    $scope.gridOptions.enableColumnResizing = true;
    $scope.gridOptions.enableFiltering = true;
    $scope.gridOptions.enableGridMenu = true;
    $scope.gridOptions.enableHorizontalScrollbar = uiGridConstants.scrollbars.NEVER;
    $scope.gridOptions.columnDefs = [
        {name: 'id', displayName: 'Id', visible: false},
        {name: 'country', displayName: 'Country', visible: true},
        {name: 'town', displayName: 'Town', visible: true},
        {name: 'startdate', displayName: 'Start Date', visible: true},
        {name: 'enddate', displayName: 'End Date', visible: true},

    ];
    $scope.gridOptions.columnDefs.push(
        {
            name: 'MoreDetails',
            displayName: "More Details",
            width: '100',
            enableFiltering: false,
            enableSorting: false,
            visible: true,
            cellTemplate: '<button class="tableBtn" ng-click="getExternalScopes().moreDetails(row.entity.id)">' +
            '<span class="glyphicon glyphicon-pencil"></span></button>'
        }
    )

    $scope.load();
}
])