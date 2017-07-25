'use strict';

angular.module('myApp', [])
  .controller('MovieController', function($scope, $http){
    $scope.$watch('search', function() {
      fetch();
    });

    $scope.search = "chicago, li";
     
    function fetch(){
      //$http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
      //.then(function(response){ $scope.details = response.data; });
      
      var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + $scope.search + "')"
            $http.get("https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json")
      .then(function(response){ $scope.details = response.data });
      
      console.log("Data1----",$scope.details)
      console.log("Temperature----",$scope.details.query.results.channel.item.condition.temp)
      }

      $scope.select = function(){
      this.setSelectionRange(0, this.value.length);
    }
  });
