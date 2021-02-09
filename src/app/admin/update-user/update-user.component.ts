import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { BusesService } from 'src/app/services/buses.service';
import { UserProfile } from 'src/app/services/models';
import Swal from 'sweetalert2';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user: UserProfile[];

  // form = new FormGroup({
  //   firstname: new FormControl(''),
  //   lastname: new FormControl(''),
  //   contact_number: new FormControl(''),
  //   email_address: new FormControl(''),
  //   address: new FormControl('')
  // });

  firstname: string ;
  lastname: string;
  contact_number: Number;
  email_address: string;
  address: string

  submit(data: any) {

  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  id: any;

 
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      });
    this.user = history.state.data
    this.id = this.user["id"];
    console.log(this.id)
    console.log(this.user["firstname"]);
    this.firstname =  this.user["firstname"]
    this.lastname =  this.user["lastname"]
    this.contact_number =  this.user["contact_number"]
    this.email_address =  this.user["email_address"]
    this.address =  this.user["address"]
  }

  submitPass(val){
    document.getElementById('spinner').style.display = "block";
    const AuthStr = 'Bearer '.concat(window.localStorage.getItem('admin_token')); 
    axios.put("https://btal-ride.herokuapp.com/api/admin-client/"+this.id, val, { headers: { Authorization: AuthStr } })
      .then(response => {
      document.getElementById('spinner').style.display = "none";
        Swal.fire(
          'Update',
          'User updated successfully.',
          'success'
        )
        this.router.navigate(['/admin/user-profile']);
      })
    .catch((error) => {
     console.log('error ' + error);
      });
  }

}
