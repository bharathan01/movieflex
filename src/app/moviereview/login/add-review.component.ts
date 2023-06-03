import { Component } from '@angular/core';
import { EditMovieReviewComponent } from '../register/edit-movie-review.component';
import { FormBuilder, Validators } from '@angular/forms';
import { MovieserviceService } from 'src/app/app-service/movieservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent {

  constructor(private fb:FormBuilder,private service:MovieserviceService,private route:Router){}
  

  loginUserForm:any = this.fb.group({
    email:['',[Validators.required,Validators.email,Validators.pattern('[0-9a-zA-Z_ -.@]+')]],
    password:['',[Validators.required,Validators.pattern('[0-9,a-z,A-Z.-_@;:#]+')]]
  })


  logInUser(){
    if(this.loginUserForm.valid){
      this.service.logInUserDetails(this.loginUserForm.value).subscribe((data:any) => {
           if(data.statusCode == 200){
            localStorage.setItem('username',JSON.stringify(data.name))
            localStorage.setItem('email',JSON.stringify(data.email))
            localStorage.setItem('token',JSON.stringify(data.token))

            alert(data.message)

            this.route.navigateByUrl('')

           }
            if(data.statusCode == 400){
            alert(data.message)
           }
           else{
            alert(data.message)
           }
      })
    }
  }


}
