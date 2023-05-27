import { Component } from '@angular/core';
import { MovieserviceService } from '../app-service/movieservice.service';

@Component({
  selector: 'app-movie-catagory',
  templateUrl: './movie-catagory.component.html',
  styleUrls: ['./movie-catagory.component.css']
})
export class MovieCatagoryComponent {
 movieCatagory:any
 Action:any
 comady:any
 thriller:any
 scifi:any
 horror:any
 fantacy:any
  constructor(private service:MovieserviceService){

  }
  ngOnInit(){
    this.service.getMovieDetails().subscribe((data:any) => {
     this.movieCatagory = data.data
     this.Action = this.movieCatagory.filter( (el:any) =>{
      return el.category == "Action"
    })
    this.comady = this.movieCatagory.filter( (el:any) =>{
      return el.category == "Comedy"
    })
    this.horror = this.movieCatagory.filter( (el:any) =>{
      return el.category == " Horror"
    })
    this.thriller = this.movieCatagory.filter( (el:any) =>{
      return el.category == "Thriller"
    })
    this.scifi = this.movieCatagory.filter( (el:any) =>{
      return el.category == "Sci-Fi"
    })
    this.fantacy = this.movieCatagory.filter( (el:any) =>{
      return el.category == "Fantasy"
    })

    
    })
    
  }

}
