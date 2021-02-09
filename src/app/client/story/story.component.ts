import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    window.localStorage.removeItem('client_token');
    window.localStorage.removeItem('client_id');
    this.router.navigate(['/home'])
  }
}
