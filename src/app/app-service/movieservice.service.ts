import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  constructor(private http:HttpClient) { }

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

     
}
