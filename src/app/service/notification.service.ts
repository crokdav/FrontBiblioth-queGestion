import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Role } from '../model/Role';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  
  private headers = new HttpHeaders({ 'Authorization': localStorage.getItem("token") });
  
  url:string = "http://localhost:8080/notification"


  constructor(private http: HttpClient) { }

  getAll(): any {
    return this.http.get(this.url + '/all', { headers: this.headers });
  }


  delete(id: number): any {
    return this.http.delete(this.url + '/remove/' + id, { headers: this.headers, observe: "response" });
  }

  save(l: Notification): any {
    return this.http.post(this.url + '/save', l, { headers: this.headers, observe: "response" });
  }
}
