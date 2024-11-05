import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface User{
  name:string;
  email:string;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  
  private homes: { [id: number]: any } = {
    1: { 
      id: 1, 
      title: 'Ocean View Apartment', 
      description: 'Beautiful apartment with ocean view.', 
      location: 'Mumbai', 
      furnished:true,
      buildingType:"apartment",
      rent: 5000, 
      amenities: { wifi: true, bikeparking: true, gym: false }, 
      image: 'https://angular.io/assets/images/tutorials/faa/example-house.jpg', 
      comments: [] 
    },
    2: { 
      id: 2, 
      title: 'Mountain Cabin', 
      description: 'Cozy cabin in the mountains.', 
      location: 'kolkata', 
      furnished:true,
      buildingType:"apartment",
      rent: 3000, 
      amenities: { wifi: true, bikeparking: false, gym: false }, 
      image: 'https://angular.io/assets/images/tutorials/faa/saru-robert-9rP3mxf8qWI-unsplash.jpg', 
      comments: [] 
    },
    3: { 
      id: 3, 
      title: 'family Homes', 
      description: 'good looking apartment.', 
      location: 'Mumbai', 
      furnished:true,
      buildingType:"apartment",
      rent: 13000, 
      amenities: { wifi: false, bikeparking: true, gym: false }, 
      image: 'https://angular.io/assets/images/tutorials/faa/krzysztof-hepner-978RAXoXnH4-unsplash.jpg', 
      comments: [] 
    },
    4: { 
      id: 4, 
      title: 'Crew Building', 
      description: 'crew building is very good for all living and very cost efficient', 
      location: 'Hyderabad', 
      furnished:true,
      buildingType:"apartment",
      rent: 6000, 
      amenities: { wifi: true, bikeparking: false, gym: false }, 
      image: 'https://angular.io/assets/images/tutorials/faa/ian-macdonald-W8z6aiwfi1E-unsplash.jpg', 
      comments: [] 
    },
    
  };

  
  private users: { [email: string]: any } = {
    'kiran@example.com': { 
      name: 'kiran', 
      email: 'kiran@example.com', 
      password: 'kiran', 
      favorites: [] 
    },
    'saikiran@nagarro.com': { 
      name: 'saikiran', 
      email: 'saikiran@nagarro.com', 
      password: 'password', 
      favorites: [] 
    }
    
  };

  
  private loggedInUser: any = null;
 

  constructor(private router:Router) {}

 
  getAllHomes() {
    return Object.values(this.homes);
  }


  getHomeById(id: number) {
    return this.homes[id];
  }

  addHome(homeData: any) {
    const id = Object.keys(this.homes).length + 1;
    this.homes[id] = { id, ...homeData, comments: [] };
  }

  login(email: string, password: string): boolean {
    const user = this.users[email];
    if (user && user.password === password) {
      this.loggedInUser = user;
      return true;
    }
    return false;
  }

  register(name: string, email: string, password: string): boolean {
    if (this.users[email]) {
      return false;
    }
    this.users[email] = { name, email, password, favorites: [] };
    return true;
  }

  logout() {
    this.loggedInUser = null;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.loggedInUser != null;
  }


  getCurrentUser() {
    return this.loggedInUser;
  }

  isFavorite(homeId:number):boolean{
    return this.loggedInUser?.favorites?.includes(homeId) || false
  }

  toggleFavorite(homeId: number) {
    if (this.loggedInUser) {
      const favorites = this.loggedInUser.favorites ;
      const favoriteIndex = favorites.indexOf(homeId);
      if (favoriteIndex === -1) {
        favorites.push(homeId);
      } else {
        favorites.splice(favoriteIndex,1);
      }
    }
  }

  addComment(homeId: number, username: string, text: string) {
    if (this.homes[homeId]) {
      this.homes[homeId].comments.push({ username, text }); 
    }
  }
  }

