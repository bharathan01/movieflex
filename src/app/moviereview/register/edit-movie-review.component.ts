import { Component, Injectable } from '@angular/core';
import { FormBuilder ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MovieserviceService } from 'src/app/app-service/movieservice.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-edit-movie-review',
  templateUrl: './edit-movie-review.component.html',
  styleUrls: ['./edit-movie-review.component.css']
})
export class EditMovieReviewComponent {

    
     constructor(private fb:FormBuilder,private service:MovieserviceService,private router:Router){

     }

     userRegDetails:any = this.fb.group({ 
      name:['',[Validators.required,Validators.pattern('[a-zA-Z .]+')]],
      username:['',[Validators.required,Validators.pattern('[0-9a-zA-Z. -_@]+')]],
      email:['',[Validators.required,Validators.email, Validators.pattern('[0-9,a-z,A-Z.-_@;:#]+')]],
      password:['',[Validators.required,Validators.pattern('[0-9,a-z,A-Z.-_@;:#]+')]]
     })
     Register(){
      if(this.userRegDetails.valid){
         this.service.registerNewUser(this.userRegDetails.value).subscribe((data:any) =>{
            confirm(data.message)
            this.router.navigateByUrl('login')
         })
      }
     
     }
     
 

     
} 
