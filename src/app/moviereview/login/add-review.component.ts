import { Component } from '@angular/core';
import { EditMovieReviewComponent } from '../register/edit-movie-review.component';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent {
  
  registerComponent:any


  openRegisterForm(){
    this.registerComponent = EditMovieReviewComponent 
  }
}
