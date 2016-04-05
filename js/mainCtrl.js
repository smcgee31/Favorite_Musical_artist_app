// declaring the controller and injecting the service
angular.module('app').controller('firstController', function($scope, mainService){

    $scope.reallyLike = mainService.reallyLike;
    $scope.kindaLike = mainService.kindaLike;

    $scope.addArtist = function() {
        var artistObj = buildArtist()
        mainService.addNewArtist(artistObj);
        clearInputField();
    }

    function buildArtist() {
        return {
            name: $scope.artist,
            genre: $scope.genre,
            rating: $scope.rating
        };
    };

    function clearInputField() {
        $scope.artist = '';
        $scope.genre = '';
        $scope.rating = '';
    }

});
