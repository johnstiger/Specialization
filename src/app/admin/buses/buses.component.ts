import { Component, OnInit } from '@angular/core';
import { Bus } from '../../services/models';
import { BusesService } from '../../services/buses.service'
import { Router } from '@angular/router';
import axios from 'axios';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css']
})
export class BusesComponent implements OnInit {
  form = new FormGroup({
    bus_name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    number_of_seat: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    img_url: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required)
  });
  buses: Bus[];

  constructor(
    private busesService: BusesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getBuses()
  }
  hidden = false;
  deleteMsg() {
    this.hidden = !this.hidden;
  }

  getBuses() {
    document.getElementById('spinner').style.display = "block";
    const AuthStr = 'Bearer '.concat(window.localStorage.getItem('admin_token'));
    axios.get("https://btal-ride.herokuapp.com/api/admin-bus", { headers: { Authorization: AuthStr } })
      .then(response => {
        this.buses = response.data;
        document.getElementById('spinner').style.display = "none";
      })
      .catch((error) => {
        console.log('error ' + error);
      });
  }

  view(id) {
    this.router.navigate(['/admin/bus_specs/' + id]);
  }

  update(bus){
    this.router.navigate(['/admin/update-bus/'+bus.id],{
      state :{
        data : bus
      }
    });
  }

  addBus() {
    this.router.navigate(['/admin/add-bus']);
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
        axios.delete("https://btal-ride.herokuapp.com/api/admin-bus/" + id, { headers: { Authorization: AuthStr } })
          .then(response => {
            Swal.fire(
              'Removed!',
              'Bus removed successfully.',
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
          ' still in our database.)',
          'error'
        )
      }
    })
  }

  // delDialog(){
  //   const delText = this.dialog.open(BusDialog)
  // }
}

// @Component({
//   selector: 'BusDialog',
//   templateUrl: 'busdialog.component.html'
// })

// export class BusDialog{}
