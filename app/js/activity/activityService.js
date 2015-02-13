/**
 * Created by Jonathan on 13-02-15.
 */
'use strict'
mgmtTripApp
    .factory('activityService',function(){

        var activities = [{
            "id": "0",
            "type": "Restaurant",
            "name": "",
            "comment": "",
            "linkToTrip":"0"
        },

            {
                "id": "1",
                "type": "Visite",
                "name": "",
                "comment": "",
                "cost":15,
                "linkToTrip":"0"
            },
            {
                "id": "2",
                "type": "Shop",
                "name": "",
                "comment": "",
                "linkToTrip":"0"
            },
            {
                "id": "3",
                "type": "Visite",
                "name": "Elephant's world",
                "comment": "",
                "cost":100,
                "linkToTrip":"2"
            }
        ];
        return {
            getActivities: function(){
                return activities;
            },
            getActivitiesByTrip: function(id){
                return activities.filter(function(el){
                    var activity = el.linkToTrip == id;
                    if(activity) return el;
                });
            }

        }
    })