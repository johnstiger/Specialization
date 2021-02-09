import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import Swal from 'sweetalert2';
import { BookingsService } from '../../services/bookings.service';
import { Booking } from '../../services/models';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  bookings: Booking[];

  constructor(
    private bookingService: BookingsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getBookings()
  }

  hidden = true;

  getBookings() {
    document.getElementById('spinner').style.display = "block";
    const AuthStr = 'Bearer '.concat(window.localStorage.getItem('admin_token'));
    axios.get("https://btal-ride.herokuapp.com/api/client-booking", { headers: { Authorization: AuthStr } })
      .then(response => {
        document.getElementById('spinner').style.display = "none";
        this.bookings = response.data;
        console.log(this.bookings);
      })
      .catch((error) => {
        document.getElementById('spinner').style.display = "none";
        console.log('error ' + error);
      });

  }

  alertConfirmation(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        const AuthStr = 'Bearer '.concat(window.localStorage.getItem('admin_token'));
        axios.delete("https://btal-ride.herokuapp.com/api/client-booking/" + id, { headers: { Authorization: AuthStr } })
          .then(response => {
            Swal.fire(
              'Removed!',
              'Booking removed successfully.',
              'success'
            )
            window.location.reload();
          })
          .catch((error) => {
            console.log('error ' + error);
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Booking still in our database.)',
          'error'
        )
      }
    })
  }


}