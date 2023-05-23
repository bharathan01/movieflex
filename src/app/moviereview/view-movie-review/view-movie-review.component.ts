import { Component } from '@angular/core';

@Component({
  selector: 'app-view-movie-review',
  templateUrl: './view-movie-review.component.html',
  styleUrls: ['./view-movie-review.component.css']
})
export class ViewMovieReviewComponent {
 
  openReviewform:boolean = false

   openReview(){
    this.openReviewform =! this.openReviewform

  }

}
