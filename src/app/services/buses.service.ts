import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bus } from '../services/models';
import axios from 'axios';

// import { Bus } from './models';

@Injectable({
  providedIn: 'root'
})
export class BusesService {

  bus: Bus[] = [];


  private url = 'https://btal-ride.herokuapp.com/api/admin-bus';

  constructor(private http: HttpClient) {}

  // private buses: Bus[] = [
  //   {
  //     bus_id: 1,
  //     bus_name: 'Luna',
  //     status: false,
  //     price: 200,
  //     payment: 'cod',
  //     img_url: '../../assets/images/bus5.jpg'
  //   },
  //   {
  //     bus_id: 2,
  //     bus_name: 'Rizal',
  //     status: true,
  //     price: 300,
  //     payment: 'paypal',
  //     img_url: '../../assets/images/bus2.jpg'
  //   },
  //   {
  //     bus_id: 3,
  //     bus_name: 'Rizal',
  //     status: true,
  //     price: 300,
  //     payment: 'paypal',
  //     img_url: '../../assets/images/bus4.jpg'
  //   }
  // ];

  getBuses(){
    const AuthStr = 'Bearer '.concat(window.localStorage.getItem('admin_token')); 
    axios.get(this.url, { headers: { Authorization: AuthStr } })
      .then(response => {
    return this.http.get(this.url);
        
     console.log(response);
      })
    .catch((error) => {
     console.log('error ' + error);
      });
  }
  currentBus:any;

  addBus(bus: Bus){
    this.bus.push(bus);
  }
  
  updateBus() {
    alert('update');
  }

  deleteBus() {
    alert('delete');
  }
}
