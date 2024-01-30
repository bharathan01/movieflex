import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() userData :any
  manuAction: boolean = false;
  constructor(private route: Router) {}
  ngOnInit() {
    if (localStorage.getItem('email')) {
      this.userData.userEmail = JSON.parse(localStorage.getItem('email') || '');
      this.userData.userName = JSON.parse(localStorage.getItem('username') || '');
    } else {
      this.route.navigateByUrl('/login');
    }
  }
  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    this.route.navigateByUrl('/login');
  }
  openMenuBar() {
    this.manuAction = !this.manuAction;
  }
}
