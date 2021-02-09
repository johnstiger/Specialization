import { Component, OnInit } from '@angular/core';
import { Bus } from '../../services/models';
import { BusesService  } from '../../services/buses.service'
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-bus-specs',
  templateUrl: './bus-specs.component.html',
  styleUrls: ['./bus-specs.component.css']
})
export class BusSpecsComponent implements OnInit {

  buses:  Bus[];
  description:string;
  constructor(
    private busesService: BusesService,
    private router :Router,
    private route : ActivatedRoute

    ) { }
  id:any;
  ngOnInit(): void {
    this.getBuses();
    document.getElementById('spinner').style.display = "block";
    this.route.paramMap.subscribe(
      params=> {
        this.id = params.get('id');
      }
    );
    const AuthStr = 'Bearer '.concat(window.localStorage.getItem('admin_token')); 
    axios.get("https://btal-ride.herokuapp.com/api/admin-bus/"+this.id, { headers: { Authorization: AuthStr } })
      .then(response => {
        console.log(response.data);
       this.buses = response.data;
      document.getElementById('spinner').style.display = "none";
      })
    .catch((error) => {
     console.log('error ' + error);
      });
  }

  getBuses(){
    
  }

}
