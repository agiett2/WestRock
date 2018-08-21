const app = angular.module('app', []);
app.controller('movie', ['$scope', '$http', function ($scope, $http) {
   $http.get('Data/movies.json').then(function(response){
       $scope.movies = response.data;
        console.log(response.data);
   }, function(error){
       console.log(error);
   }); 
$scope.filterBy = "";
    
}]);



