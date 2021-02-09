import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://btal-ride.herokuapp.com/api/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }

  readAll():Observable<any>{
    return this.httpClient.get(baseUrl);
  }

  read(id):Observable<any>{
    return this.httpClient.get(`${baseUrl}/${id}`);
  }

  create(data):Observable<any>{
    return this.httpClient.post(baseUrl, data);
  }
}
