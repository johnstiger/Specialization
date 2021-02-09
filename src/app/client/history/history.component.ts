import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingsService } from 'src/app/services/bookings.service';
import { Booking } from '../../services/models';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  bookings: Booking[];

  constructor(
    private bookingsService: BookingsService,
    private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    window.localStorage.removeItem('client_token');
    this.router.navigate(['/']);
  }

}
