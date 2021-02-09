import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  private url = "https://btal-ride.herokuapp.com/api/admin-booking";

  constructor(private http: HttpClient) { }

  getBookings(){
    const AuthStr = 'Bearer '.concat(window.localStorage.getItem('admin_token')); 
    axios.get(this.url, { headers: { Authorization: AuthStr } })
      .then(response => {
      return this.http.get(this.url);
      })
    .catch((error) => {
     console.log('error ' + error);
      });
  }

  updateBooking(){
    alert('update');
  }

 
  // getBookingIndex(booking: Booking){
  //   return this.bookings.indexOf(booking);
  // }

  // getBooking(index: number){
  //   return this.bookings[index];
  // }

  // addBooking(booking: Booking){
  //   this.bookings.push(booking);
  // }

  // deleteBooking(booking: Booking){
  //   this.bookings.splice(this.bookings.indexOf(booking), 1);
  // }

  // updateBooking(index: number, booking: Booking){
  //   this.bookings[index] = booking;
  // }
}
