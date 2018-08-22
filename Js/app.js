'use strict';

const app = angular.module('app', []);
app.controller('movie', ['$scope', '$http', function ($scope, $http) {
    let movies = [];
    let filteredMovies = [];
   $http.get('Data/movies.json').then(function(response){
       movies = response.data;
       $scope.movies = response.data;
        console.log(response.data);
   }, function(error){
       console.log(error);
   }); 
$scope.title = 'MovieFlix';
$scope.roudstars = (star) => {
    const percentage = (star / movies.length) * 100;
    const percentageRounded = `${(Math.round(percentage /10) * 10)}%`;
    return percentageRounded;
}

$scope.upcoming = () => {
    let upcomingMovies = [];
    for (let movie of movies){
        if(movie.upComing == true){
            upcomingMovies.push(movie);
        }
    }
    $scope.movies = upcomingMovies;
}

$scope.noPlaying = () => {
    let nowPlayingMovies = [];
    for (let movie of movies){
        if(movie.nowPlaying == true){
            nowPlayingMovies.push(movie);
        }
    }
    $scope.movies = nowPlayingMovies;
}

$scope.topRates = () => {
    $scope.movies = _.orderBy(movies, ['rating'], ['desc']);
}

$scope.popular = () => {
    $scope.movies = _.orderBy(movies, ['popularity'], ['desc']);
    
}
}]);



