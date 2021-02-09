import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  public ADMIN_TOKEN: any;
  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])

  });
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  login() {
    document.getElementById('spinner').style.display = "block";
    axios.post("https://btal-ride.herokuapp.com/api/admin/login", this.form.value).then(res => {
      console.log(res.data);
      window.localStorage.setItem('admin_token',res.data.access_token);
      document.getElementById('spinner').style.display = "none";
      return this.router.navigate(['/admin/user-profile']);
    }).catch(err => {
      Swal.fire('Opppss!','Credential does not match in our data', 'warning');
      document.getElementById('spinner').style.display = "none";
    })
  }

}
// AddDriverComponent.ts
// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
// import { Router } from '@angular/router';
// import axios from 'axios';

// @Component({
//   selector: 'app-add-driver',
//   templateUrl: './add-driver.component.html',
//   styleUrls: ['./add-driver.component.css']
// })
// export class AddDriverComponent implements OnInit {
//   form = new FormGroup({
//     firstname: new FormControl('', Validators.required),
//     lastname: new FormControl('', Validators.required),
//     address: new FormControl('', Validators.required),
//     contact_number: new FormControl('',[
//       Validators.required,
//       Validators.minLength(11)
//       ]),
//     email_address: new FormControl('', [
//       Validators.required,
//       Validators.email
//     ]),
//     password: new FormControl('', [
//       Validators.required,
//       Validators.minLength(8)
//     ])

//   });
  
//   constructor(
//     private router: Router,
//   ) {}

//   ngOnInit(): void {
//   }

 
//   }
 

// addbus

// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl,Validators } from '@angular/forms';
// import { BusesService } from 'src/app/services/buses.service';
// import { Bus } from '../../services/models';  
// import axios from 'axios';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-add-bus',
//   templateUrl: './add-bus.component.html',
//   styleUrls: ['./add-bus.component.css']
// })

// export class AddBusComponent implements OnInit {
//   form = new FormGroup({
//     bus_name: new FormControl('',Validators.required),
//     description : new FormControl('', Validators.required),
//     number_of_seat : new FormControl('', Validators.required),
//     price : new FormControl('', Validators.required),
//     img_url: new FormControl('', Validators.required),
//     status: new FormControl('', Validators.required)
//   });
//  constructor(
//     private busesService: BusesService,
//     private router : Router
//     ) { }

//   ngOnInit(): void {
    
//   }
//   addNewBus(bus){
//     console.log(this.form.value);
//     const AuthStr = 'Bearer '.concat(window.localStorage.getItem('admin_token')); 
//     axios.get("https://btal-ride.herokuapp.com/api/admin-bus", { headers: { Authorization: AuthStr } })
//       .then(response => {
//         // this.router.navigate(['/admin/bus']);
//         this.busesService.addBus(bus);
//       })
//     .catch((error) => {
//      console.log('error ' + error);
//       });
//     }
// }
