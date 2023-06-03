import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
// post methode overloding the fun appenttoken
  const option = {
    headers:new HttpHeaders()
  }

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {


  constructor(private http:HttpClient) { }

    appentToken(){
      const token = JSON.parse(localStorage.getItem('token') || '')

      let headers = new HttpHeaders()

      if(token){
        option.headers = headers.append('access_key',token)
      }
      return option
      
    }


    baseUrl = 'http://localhost:3000/api/movieflex'
    
    getMovieDetails(){
      return this.http.get(this.baseUrl+'/movies')
         
    }
    getSingleMovieDetails(movieId:any){
      return this.http.get(this.baseUrl+'/singlemovie/'+movieId)
    }

    registerNewUser(userdetails:any){
      return this.http.post(this.baseUrl+'/register',userdetails)
    }

    logInUserDetails(userDetails:any){
      return this.http.post(this.baseUrl+'/login',userDetails)

    }

    uploadReview(reviewData:any){
      return this.http.post(this.baseUrl+'/addPost',reviewData,this.appentToken())
    }

    getReview(){
      return this.http.get(this.baseUrl+'/getreview')
    }

     
}
