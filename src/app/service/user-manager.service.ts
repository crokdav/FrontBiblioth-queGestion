import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserManager } from '../model/UserManager';

@Injectable({
  providedIn: 'root'
})
export class UserManagerService {
  url:string = "http://localhost:8080/user"


  private headers = new HttpHeaders({ 'Authorization': localStorage.getItem("token") });

  constructor(private http: HttpClient) { }


  
  getAll(): any {
    return this.http.get(this.url + '/all', { headers: this.headers });
  }


  delete(id: number): any {
    return this.http.delete(this.url + '/remove/' + id, { headers: this.headers, observe: "response" });
  }

  save(user: UserManager): any {
    return this.http.post(this.url + '/addUser', user, { headers: this.headers, observe: "response" });
  }

}
