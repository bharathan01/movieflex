import { Component } from '@angular/core';
import { MovieserviceService } from 'src/app/app-service/movieservice.service';

@Component({
  selector: 'app-view-all-movies',
  templateUrl: './view-all-movies.component.html',
  styleUrls: ['./view-all-movies.component.css']
})

export class ViewAllMoviesComponent {
  allmovieDetails:any
  moveByCatagory:any
  searchKey:any


 constructor(private service:MovieserviceService){}
   
   ngOnInit(){ 
    this.service.getMovieDetails().subscribe((movieData:any) =>{
      this.allmovieDetails = movieData.data
    })
   }

   

   moveCategory(moveType:any){
    if(moveType){
      this.moveByCatagory = this.allmovieDetails.filter( (el:any) =>{
        return el.category == moveType
     })

    }
    if(moveType ==' '){
      this.moveByCatagory = this.allmovieDetails
    }
    
    

   }

}
