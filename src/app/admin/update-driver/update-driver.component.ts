import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Driver } from '../../services/models';

@Component({
  selector: 'app-update-driver',
  templateUrl: './update-driver.component.html',
  styleUrls: ['./update-driver.component.css']
})
export class UpdateDriverComponent implements OnInit {

  // form: FormGroup;
  // currentIndex: number;
  driver: Driver[];

  firstname: string;
  lastname: string;
  contact_number: number;
  license: string;
  status: boolean;
  salary: number;
  address:string;
  id:any;
  
  constructor(
    private router : Router,
    private route : ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      });
  
    this.driver = history.state.data
    console.log(this.driver);
    this.id = this.driver["id"];
    console.log(this.id);
    this.firstname =  this.driver["firstname"];
    this.lastname = this.driver["lastname"];
    this.contact_number = this.driver["contact_number"];
    this.address = this.driver["address"];
    this.license = this.driver["license"];
    this.status = this.driver["status"];
    this.salary = this.driver["salary"];

  }

  submit(val){
    document.getElementById('spinner').style.display = "block";
    const AuthStr = 'Bearer '.concat(window.localStorage.getItem('admin_token')); 
    axios.put("https://btal-ride.herokuapp.com/api/admin-driver/"+this.id, val, { headers: { Authorization: AuthStr } })
      .then(response => {
      document.getElementById('spinner').style.display = "none";
        Swal.fire(
          'Update',
          'User updated successfully.',
          'success'
        )
        this.router.navigate(['/admin/drivers'])
      })
    .catch((error) => {
     console.log('error ' + error);
      });
  }
}
