import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';;
import { Observable } from 'rxjs';

const baseUrl = 'http://btal-ride.herokuapp.com/api/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient:HttpClient) { }

  readAll():Observable<any> {
    return this.httpClient.get(baseUrl);
  }

  create(data):Observable<any>{
    return this.httpClient.post(baseUrl, data);
  }
}
