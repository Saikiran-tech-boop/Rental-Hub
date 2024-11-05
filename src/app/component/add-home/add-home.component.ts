import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../service/home.service';

@Component({
  selector: 'app-add-home',
  templateUrl: './add-home.component.html',
  styleUrl: './add-home.component.css'
})
export class AddHomeComponent {
  homeData = {
    title: '',
    description: '',
    location: '',
    rent: null,
    furnished:false,
    buildingType:'',
    amenities: { wifi: false, bikeparking: false, gym: false, carparking: false,
      powerbackup: false, clubhouse: false, elevator: false, swimmingpool: false, waterheater: false
     },
    image: ''
  };
  showPreview: boolean = false;

  constructor(private homeService: HomeService, private router: Router) {}

  previewHome() {
    this.showPreview = true;
  }

  submitHome() {
    if(this.isFormValid()){
      this.homeService.addHome(this.homeData);
      this.router.navigate(['/']);
    }
    else{
      alert("please fill all fields before submitting.");
    }
    
  }

  isFormValid(){
    return(
      this.homeData.title.trim() !=='' &&
      this.homeData.description.trim() !== ''&&
      this.homeData.rent != null && 
      this.homeData.rent >0 &&
      this.homeData.image.trim() !== ''
    );
  }
}
