import {Component} from "@angular/core";
import {MovieListComponent} from  "./movies/movie-list.component";
import {MovieService} from "./movies/movies.service";
import {HTTP_PROVIDERS} from "@angular/http";
import "rxjs/Rx";

@Component({
    selector: "my-app",
    template: `<h1>{{welcomeMessage}}</h1>
                <div>
                <mm-movies></mm-movies>
                </div>
                `,
    directives: [MovieListComponent],
    providers: [MovieService, HTTP_PROVIDERS]
})

export class AppComponent {
    welcomeMessage: string = "Welcome to your first component!";
}