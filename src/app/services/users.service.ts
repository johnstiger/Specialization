import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = "https://btal-ride.herokuapp.com/api/admin-client";

  constructor(private http: HttpClient) { }

  getUsers(){
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

  getUser(){
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

  updateUser(){
    alert('update');
  }

  deleteUser(){
    return this.http.delete(this.url);
  }
}
