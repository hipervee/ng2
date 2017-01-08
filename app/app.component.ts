import {Component} from "@angular/core";
import {MovieListComponent} from  "./movies/movie-list.component";

@Component({
    selector: "my-app",
    template: `<h1>{{welcomeMessage}}</h1>
                <div>
                <mm-movies></mm-movies>
                </div>
                `,
    directives: [MovieListComponent]
})

export class AppComponent {
    welcomeMessage: string = "Welcome to your first component!";
}