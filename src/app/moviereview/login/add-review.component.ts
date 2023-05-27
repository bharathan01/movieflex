import { Component } from '@angular/core';
import { EditMovieReviewComponent } from '../register/edit-movie-review.component';
import { FormBuilder, Validators } from '@angular/forms';
import { MovieserviceService } from 'src/app/app-service/movieservice.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent {

  constructor(private fb:FormBuilder,private service:MovieserviceService){}
  

  loginUserForm:any = this.fb.group({
    email:['',[Validators.required,Validators.email,Validators.pattern('[0-9a-zA-Z_ -.@]+')]],
    password:['',[Validators.required,Validators.pattern('[0-9,a-z,A-Z.-_@;:#]+')]]
  })


  logInUser(){
    if(this.loginUserForm.valid){
      this.service.logInUserDetails(this.loginUserForm.value).subscribe((data:any) => {
           console.log(data)
      })
    }
  }


}
