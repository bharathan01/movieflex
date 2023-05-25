import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieserviceService } from 'src/app/app-service/movieservice.service';

@Component({
  selector: 'app-view-single-move',
  templateUrl: './view-single-move.component.html',
  styleUrls: ['./view-single-move.component.css']
})
export class ViewSingleMoveComponent {
    
  singleMovieId:any
  movieDetails:any
   constructor(private route:ActivatedRoute,private service:MovieserviceService){}
   ngOnInit(){
 
    this.route.params.subscribe((data:any) =>{
      this.singleMovieId = data['id']
    })
     
     this.service.getSingleMovieDetails(this.singleMovieId).subscribe((data:any) =>{
        this.movieDetails = data.data
        console.log(this.movieDetails)
     })


   }
}
