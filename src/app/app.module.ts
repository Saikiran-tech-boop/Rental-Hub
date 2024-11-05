import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddHomeComponent } from './component/add-home/add-home.component'
import { HomeDetailsComponent } from './component/home-details/home-details.component';
import { RouterModule} from '@angular/router';
import { HomeService } from './service/home.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AddHomeComponent,
    HomeDetailsComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  providers:[HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
