import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Driver } from '../services/models';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class DriversService {

  // driver: Driver[];

  private url = "https://btal-ride.herokuapp.com/api/admin-driver";

  constructor(private http: HttpClient) { }

  getDrivers(){
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

  // addDriver(driver: Driver){
  //   this.driver.push(driver);
  // }

  // updateDriver(index:number,driver: Driver){
  //   this.driver[index] = driver;
  // }

  deleteDriver(){
    // alert('delete');
  }

  // addDriver(driver: Driver){
  //   this.drivers.push(driver);
  // }
}
