import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HomeService } from '../../service/home.service';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css'],
})
export class HomeDetailsComponent implements OnInit{
  home: any;
  newComment: string = '';

  constructor(private readonly route: ActivatedRoute, private readonly homeService: HomeService, private readonly router: Router) {}

  ngOnInit() {
    const homeId = Number(this.route.snapshot.paramMap.get('id'));
    this.home = this.homeService.getHomeById(homeId);
  }

  addComment() {
    const currentUser= this.homeService.getCurrentUser()
    if(this.newComment && currentUser){
      this.homeService.addComment(this.home.id, currentUser.name, this.newComment);
      this.newComment = '';
      this.home = this.homeService.getHomeById(this.home.id);
    
  }
}
}