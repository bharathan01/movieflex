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
  star =[1,2,3,4,5]
  movieData:any
  totalRating:any
  singlemovieData:any
  rating =0
  Movielike:any
   constructor(private route:ActivatedRoute,private service:MovieserviceService){}
   ngOnInit(){
 
    this.route.params.subscribe((data:any) =>{
      this.singleMovieId = data['id']
    })
     
     this.service.getSingleMovieDetails(this.singleMovieId).subscribe((data:any) =>{
        this.movieDetails = data.data

     })
      
     this.service.getReview().subscribe((data:any) => {
      this.movieData = data.data
      this.singlemovieData = this.movieData.filter((el:any) =>{
        return el.movieId ==this.singleMovieId
      })
      this.totalRating = this.singlemovieData.map((el:any) =>el.rating) 
      console.log(this.totalRating);
      for(let i of this.totalRating){
        this.rating = this.rating +i 
      }   
      this.rating = this.rating/this.totalRating.length

     })


   }

   like(){
      this.Movielike = true
   }


   
    

}
