import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})



export class HomeComponent{
  homes: any[] = [];
  filteredHomes: any[] = [];
  searchLocation: string = '';
  minRent: number | null = null;

  constructor(public homeService: HomeService, private router: Router) {
    this.homes = homeService.getAllHomes();
    this.filteredHomes = this.homes;
  }

  search() {
    this.filteredHomes = this.homes.filter(home =>{
      const matchLocation = this.searchLocation ? home.location.toLowerCase().includes(this.searchLocation.toLowerCase()) : true;
      const matchesRent = this.minRent != null ? home.rent <= this.minRent :true;
      return matchLocation && matchesRent;
    });
  }

  toggleFavorite(home:any) {
    if (this.homeService.isLoggedIn()) {
      this.homeService.toggleFavorite(home.id);
    } else {
      alert('Please log in to mark as favorties.');
      this.router.navigate(['/login']);
    }
    
  }

  moreDetails(homeId: number) {
    if (this.homeService.isLoggedIn()) {
      this.router.navigate(['/home-details', homeId]);
    } else {
      alert('Please log in to view more details.');
      this.router.navigate(['/login']);
    }
  }
}