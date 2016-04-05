angular.module('app').service('mainService', function() {

    this.reallyLike = [];
    this.kindaLike = [];

    this.addNewArtist = function(artistObj) {
        if (artistObj.rating >= 50) {
            this.reallyLike.push({name: artistObj.name, genre: artistObj.genre, rating: artistObj.rating});
        }
        else {
            this.kindaLike.push({name: artistObj.name, genre: artistObj.genre, rating: artistObj.rating});
        }
    }


});
