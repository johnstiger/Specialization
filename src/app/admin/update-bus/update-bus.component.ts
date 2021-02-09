import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BusesService } from 'src/app/services/buses.service';
import axios from 'axios';
import { Router, ActivatedRoute } from '@angular/router';
import { Bus } from 'src/app/services/models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-bus',
  templateUrl: './update-bus.component.html',
  styleUrls: ['./update-bus.component.css']
})
export class UpdateBusComponent implements OnInit {

  buses:Bus[];
  bus_name: string;
  description: string;
  number_of_seat: number;
  price:number;
  img_url:string;
  status:boolean;

 constructor(
    private busesService: BusesService,
    private router : Router,
    private route : ActivatedRoute
    ) { }

  id: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params=> {
        this.id = params.get('id');
      }

    );
    this.buses = history.state.data
    console.log(this.buses);
    this.id = this.buses["id"];
    this.bus_name = this.buses["bus_name"];
    this.description = this.buses["description"];
    this.number_of_seat = this.buses["number_of_seat"];
    this.price = this.buses["price"];
    this.img_url = this.buses["img_url"];
    this.status =this.buses["status"];    
  }
  
  submit(val){
    document.getElementById('spinner').style.display = "block";
    const AuthStr = 'Bearer '.concat(window.localStorage.getItem('admin_token')); 
    axios.put("https://btal-ride.herokuapp.com/api/admin-bus/"+this.id, val, { headers: { Authorization: AuthStr } })
      .then(response => {
      document.getElementById('spinner').style.display = "none";
        Swal.fire(
          'Update',
          'User updated successfully.',
          'success'
        )
        this.router.navigate(['/admin/buses'])
      })
    .catch((error) => {
     console.log('error ' + error);
      });
  }

}
