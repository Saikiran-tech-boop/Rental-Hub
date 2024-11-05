import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../service/home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private homeService: HomeService, private router: Router) {}

  login() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter email and password';
      return;
    }
    if (this.homeService.login(this.email, this.password)) {
      this.router.navigate(['/']);
    } else {
      this.errorMessage = 'Invalid credentials';
    }
  }
  
}
