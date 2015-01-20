/**
 * Created by Jonathan on 18-01-15.
 */
'use strict'
//angular.module('tripService',[])
 mgmtTripApp
.factory('tripList',function(){

            var trips = [{
            "id": "0",
            "country": "Hungary",
            "town": "Budapest",
            "startdate": "18/02/2015",
                "enddate":"20/02/2015"
        },

            {
                    "id": "1",
                    "country": "Portugal",
                    "town": "Porto",
                    "startdate": "07/04/2015",
                    "enddate":"10/04/2015"
                },
                {
                    "id": "2",
                    "country": "Thailande",
                    "town": "",
                    "startdate": "01/07/2015",
                    "enddate":"19/07/2015"
                }
        ];
        return {
            getTripList: function(){
                return trips;
            },
            getTripById: function(id){
                return trips.filter(function(el){
                    return el.id = id;
                });
            }

        }
    })