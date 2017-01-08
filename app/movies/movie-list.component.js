"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var movie_filter_pipe_1 = require("./movie-filter.pipe");
var MovieListComponent = (function () {
    function MovieListComponent() {
        this.title = 'Movie List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.seePoster = false;
        this.movies = [
            {
                "movieId": 2,
                "movieName": "Titanic!",
                "movieStar": "DiCaprio",
                "releaseDate": "3/13/2016",
                "price": 8.00,
                "starRating": 4.5,
                "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMzg1MDA0MTU2Nl5BMl5BanBnXkFtZTcwMTMzMjkxNw@@._V1_.jpg"
            },
            {
                "movieId": 3,
                "movieName": "Jaws!",
                "movieStar": "Shaw",
                "releaseDate": "4/13/2016",
                "price": 6.00,
                "starRating": 4.8,
                "imageUrl": "http://ia.media-imdb.com/images/M/MV5BNDcxODkyMjY4MF5BMl5BanBnXkFtZTgwOTk5NTc5MDE@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
            }
        ];
    }
    MovieListComponent.prototype.toggleImage = function () {
        this.seePoster = !this.seePoster;
    };
    ;
    MovieListComponent.prototype.ngOnInit = function () {
        console.log("Init Called");
    };
    MovieListComponent = __decorate([
        core_1.Component({
            selector: "mm-movies",
            templateUrl: "app/movies/movie-list.component.html",
            styleUrls: ["app/movies/movie-list.component.css"],
            pipes: [movie_filter_pipe_1.MovieFilterPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], MovieListComponent);
    return MovieListComponent;
}());
exports.MovieListComponent = MovieListComponent;
//# sourceMappingURL=movie-list.component.js.map