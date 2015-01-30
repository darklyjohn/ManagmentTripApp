/**
 * Created by Jonathan on 17-01-15.
 */
'use strict';

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
