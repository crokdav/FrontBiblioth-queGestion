import { Injectable } from '@angular/core';
import { Role } from '../model/Role';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private headers = new HttpHeaders({ 'Authorization': localStorage.getItem("token") });
  
  url:string = "http://localhost:8080/role"


  constructor(private http: HttpClient) { }

  getAll(): any {
    return this.http.get(this.url + '/all', { headers: this.headers });
  }


  delete(id: number): any {
    return this.http.delete(this.url + '/remove/' + id, { headers: this.headers, observe: "response" });
  }

  save(l: Role): any {
    return this.http.post(this.url + '/save', l, { headers: this.headers, observe: "response" });
  }
}