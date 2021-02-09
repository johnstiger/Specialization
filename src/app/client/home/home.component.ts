import { Component, OnInit } from '@angular/core';
import { Bus } from '../../services/models';
import { BusesService  } from '../../services/buses.service'
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  buses: Bus[];

  constructor(
    private busesService: BusesService
  ) { }

  ngOnInit(): void {
    this.getBuses()
  }
  getBuses() {
    //backend side
    const AuthStr = 'Bearer '.concat(window.localStorage.getItem('client_token')); 
    axios.get("https://btal-ride.herokuapp.com/api/admin-bus", { headers: { Authorization: AuthStr } })
      .then(response => {
        this.buses = response.data;
     console.log(response);
      })
    .catch((error) => {
     console.log('error ' + error);
      });
  }
  
}
