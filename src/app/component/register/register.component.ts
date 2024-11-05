import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent{
  name: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private homeService: HomeService, private router: Router) {}

  register() {
    if (!this.name || !this.email || !this.password) {
      this.errorMessage = 'All fields are required';
      return;
    }
    if (this.homeService.register(this.name, this.email, this.password)) {
      this.router.navigate(['/login']);
    } else {
      this.errorMessage = 'User already registered';
    }
  }
}
  
