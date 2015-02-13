/**
 * Created by Jonathan on 18-01-15.
 */
'use strict'
mgmtTripApp
    .factory('tripList', function () {

        var trips = [{
            "id": "0",
            "country": "Hungary",
            "town": "Budapest",
            "startdate": "2015/02/17",
            "enddate": "2015/02/20"
        },

            {
                "id": "1",
                "country": "Portugal",
                "town": "Porto",
                "startdate": new Date("07/04/2015"),
                "enddate": new Date("10/04/2015")
            },
            {
                "id": "2",
                "country": "Thailande",
                "town": "Kanchanaburi",
                "startdate": new Date("01/07/2015"),
                "enddate": new Date("19/07/2015")
            }
        ];
        return {
            getTripList: function () {
                return trips;
            },
            getTripById: function (id) {
                return trips.filter(function (el) {
                    var trip = el.id == id;
                    if (trip) return el;
                });
            }

        }
    })