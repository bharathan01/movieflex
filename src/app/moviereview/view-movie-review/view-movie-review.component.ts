import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import { MovieserviceService } from 'src/app/app-service/movieservice.service';

@Component({
  selector: 'app-view-movie-review',
  templateUrl: './view-movie-review.component.html',
  styleUrls: ['./view-movie-review.component.css']
})
export class ViewMovieReviewComponent {

  openReviewform: boolean = true
  openDelete: boolean = true
  rating = 0
  starCount = [1, 2, 3, 4, 5]
  reviewHeading: any
  reviewContent: any
  movieId: any
  userName: any
  email: any
  reviewData: any
  movieReviewData:any
  singleMovieReview:any
  MovieUserId:any
  userRating =0
  date: String = new Date().toDateString()
  constructor(private at: ActivatedRoute ,private service:MovieserviceService) { }
  ngOnInit() {

    this.at.params.subscribe((data: any) => {
      this.movieId = data['id']
    })

    this.userName = JSON.parse(localStorage.getItem('username') || '')
    this.email = JSON.parse(localStorage.getItem('email') || '')

     this.service.getReview().subscribe((data:any) => {
      this.movieReviewData = data.data
      this.singleMovieReview = this.movieReviewData.filter((el:any) =>{
        return el.movieId == this.movieId
      })
      this.MovieUserId = this.singleMovieReview.map((el:any) =>el._id)
     
      
    })
   
  }

  openReview() {
    this.openReviewform = !this.openReviewform
    
  }
  openDeleteForm(id:any) {
    for(let i of this.MovieUserId){
      if(id == i){
        this.openDelete = !this.openDelete
      }
      
    }
  }

  addRating(value: any) {
    this.rating = value

  }
  uploadReview() {
    if (this.reviewHeading == undefined && this.reviewContent == undefined) {
      alert('every field is requried..')
    }
    else {
      this.reviewData = {
        movieId: this.movieId,
        username: this.userName,
        email: this.email,
        reviewheading: this.reviewHeading,
        reviewcontent: this.reviewContent,
        date: this.date,
        rating: this.rating
      }
      this.service.uploadReview(this.reviewData).subscribe((data:any)=>{
        alert(data.message)
       
      })
      this.openReviewform = true
      this.service.getReview().subscribe((data:any) =>{
        this.movieReviewData = data.data
        this.singleMovieReview = this.movieReviewData.filter((el:any) =>{
          return el.movieId == this.movieId
        })
      })

    }
  }

  reviewDelete(reviewId:any){
    console.log(reviewId)

  }



}
