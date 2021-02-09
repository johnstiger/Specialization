import { Component, OnInit } from '@angular/core';
import { Driver } from '../../services/models';
import { DriversService } from 'src/app/services/drivers.service';
import axios from 'axios';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  form = new FormGroup({
    firstname: new FormControl('',Validators.required),
    lastname : new FormControl('', Validators.required),
    contact_number : new FormControl('', Validators.required),
    license: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required)
  });
  drivers: Driver[];

  constructor(
    private driverService: DriversService,
    private router : Router

    ) { }

  ngOnInit(): void {
    this.getDrivers()
  }

  hidden = true;
  getDrivers(){
    document.getElementById('spinner').style.display = "block";
    const AuthStr = 'Bearer '.concat(window.localStorage.getItem('admin_token')); 
    axios.get("https://btal-ride.herokuapp.com/api/admin-driver", { headers: { Authorization: AuthStr } })
      .then(response => {
        this.drivers = response.data;
        console.log(this.drivers);
        document.getElementById('spinner').style.display = "none";
      })
    .catch((error) => {
     console.log('error ' + error);
      });

  }


  
  update(driver){
    this.router.navigate(['/admin/update-driver/'+driver.id],{
      state :{
        data : driver
      }
    });
  }
  addnewDriver(){
    console.log(this.form.value);
    document.getElementById('loading').style.display = "block";
    axios.post("https://btal-ride.herokuapp.com/api/admin/driver", this.form.value).then(res => {
    document.getElementById('loading').style.display = "none";
      this.router.navigate(['/admin/driver']);
    }).catch(err => {
      alert(err);
    })
  }

  add(){
    this.router.navigate(['admin/add-driver']);
  }
  addDriver(){
    document.getElementById("table").style.display = "block";
  }

  close(){
    document.getElementById("table").style.display = "none";
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
        axios.delete("https://btal-ride.herokuapp.com/api/admin-driver/" + id, { headers: { Authorization: AuthStr } })
          .then(response => {
            Swal.fire(
              'Removed!',
              'Driver removed successfully.',
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
          'Driver still in our database.)',
          'error'
        )
      }
    })
  }
}
