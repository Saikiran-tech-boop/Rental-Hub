import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeDetailsComponent } from './component/home-details/home-details.component';
import { AddHomeComponent } from './component/add-home/add-home.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'add-home', component: AddHomeComponent },
  { path: 'home-details/:id', component: HomeDetailsComponent },
  { path: '**', redirectTo: '/home' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }