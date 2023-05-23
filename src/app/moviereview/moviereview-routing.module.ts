import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviereviewComponent } from './moviereview.component';
import { ViewAllMoviesComponent } from './view-all-movies/view-all-movies.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { ViewSingleMoveComponent } from './view-single-move/view-single-move.component';
import { AddReviewComponent } from './login/add-review.component';
import { EditMovieReviewComponent } from './register/edit-movie-review.component';
import { MovieCatagoryComponent } from '../movie-catagory/movie-catagory.component';

const routes: Routes = [{ path: '', component: MoviereviewComponent },
{path:'allmovies', component:ViewAllMoviesComponent},
{path:"newmovies",component:AddMovieComponent},
{path:"singlemovie",component:ViewSingleMoveComponent},
{path:"login",component:AddReviewComponent },
{path:"register",component:EditMovieReviewComponent},
{path:"catagory",component: MovieCatagoryComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviereviewRoutingModule { }
