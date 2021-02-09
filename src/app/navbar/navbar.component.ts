import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import * as $ from 'jquery';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(
    private router : Router
    ) { }
  title = 'angularbootstrap';
  ngOnInit() {
   $("#menu-toggle").click(function(e) {
     e.preventDefault();
     $("#wrapper").toggleClass("toggled");
   });
 }
logout(){
  this.router.navigate(['/']);
  window.localStorage.removeItem('admin_token');
}
}
