import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  manuAction:boolean = false;
    constructor(private route:Router){

    }
userName:any
userEmail:any

  ngOnInit(){
    if(localStorage.getItem('email')){
      this.userEmail = JSON.parse( localStorage.getItem('email') || '')
      this.userName = JSON.parse( localStorage.getItem('username') || '')
    }
    else{
      this.route.navigateByUrl('/login')
    }
  }
   
  openMenuBar(){
    this.manuAction =! this.manuAction
  }
logout(){
  localStorage.removeItem('username')
  localStorage.removeItem('email')
  localStorage.removeItem('token')
  this.route.navigateByUrl('/login')
}


}
