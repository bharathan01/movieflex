import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviereviewRoutingModule } from './moviereview-routing.module';
import { MoviereviewComponent } from './moviereview.component';
import { ViewSingleMoveComponent } from './view-single-move/view-single-move.component';
import { ViewAllMoviesComponent } from './view-all-movies/view-all-movies.component';
import { ViewMovieReviewComponent } from './view-movie-review/view-movie-review.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { EditMovieReviewComponent } from './edit-movie-review/edit-movie-review.component';
import { AppModule } from '../app.module';
import { HeaderComponent } from '../header_nav/header/header.component';


@NgModule({
  declarations: [
    MoviereviewComponent,
    ViewSingleMoveComponent,
    ViewAllMoviesComponent,
    ViewMovieReviewComponent,
    AddMovieComponent,
    AddReviewComponent,
    EditMovieReviewComponent
  ],
  imports: [
    CommonModule,
    MoviereviewRoutingModule
  ],
  exports:[
    MoviereviewComponent
  ]
})
export class MoviereviewModule { }
