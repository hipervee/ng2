import {Component, OnInit} from "@angular/core";
import { IMovie} from "./movie";
import { MovieFilterPipe } from "./movie-filter.pipe";
import {ReviewComponent} from "../shared/review.component";

@Component({
    selector: "mm-movies",
    templateUrl: "app/movies/movie-list.component.html",
    styleUrls: ["app/movies/movie-list.component.css"],
    pipes: [MovieFilterPipe],
    directives: [ReviewComponent]
})

export class MovieListComponent implements OnInit {
    title: string = 'Movie List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    seePoster: boolean =  false;
    movies: IMovie[] = [
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
    toggleImage(): void {
        this.seePoster = !this.seePoster;
    };

    ngOnInit(): void {
        console.log("Init Called");
    }

    onRatingClicked(message: string) {
        this.title = "Rating Clicked : " + message;
    }
}