import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';
import { DriversService } from 'src/app/services/drivers.service';
import Swal from 'sweetalert2';
import { Driver } from '../../services/models' 
@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {

  form = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    contact_number: new FormControl(''),
    license: new FormControl(''),
    status: new FormControl(''),
    salary: new FormControl(''),
    address:new FormControl('')

  });
  
  constructor(
    private router: Router,
    private driversService: DriversService
    ) {}

  ngOnInit(): void {
  }

  addDriver(){
    document.getElementById('spinner').style.display = "block";
    const AuthStr = 'Bearer '.concat(window.localStorage.getItem('admin_token'));
    axios.post("https://btal-ride.herokuapp.com/api/admin-driver", this.form.value, { headers: { Authorization: AuthStr } })
      .then(response => {
        Swal.fire('Driver', 'Added Successfully', 'success');
        document.getElementById('spinner').style.display = "none";
        this.router.navigate(['/admin/drivers']);
      })
      .catch((error) => {
        console.log('error ' + error);
      });
  }

 
  }
 