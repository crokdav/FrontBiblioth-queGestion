import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UserManager } from '../model/UserManager';
import { Livre } from '../model/Livre';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  private headers = new HttpHeaders({ 'Authorization': localStorage.getItem("token") });
  url:string = "http://localhost:8080/livre"


  constructor(private http: HttpClient) { }

  getAll(): any {
    return this.http.get(this.url + '/all', { headers: this.headers });
  }

  getAllByUser(): any {
    return this.http.get(this.url + '/getAllByUser/'+localStorage.getItem("nom"), { headers: this.headers });
  }


  delete(id: number): any {
    return this.http.delete(this.url + '/remove/' + id, { headers: this.headers, observe: "response" });
  }

  save(l: Livre): any {
    return this.http.post(this.url + '/save', l, { headers: this.headers, observe: "response" });
  }

  reserver(l:Livre):any {

    return this.http.post(this.url + '/reserver/'+localStorage.getItem("nom"), l, { headers: this.headers, observe: "response" });

  }
  annuler(l:Livre):any {
    console.log("hellow")
    return this.http.post(this.url + '/Annuler_reservation/'+localStorage.getItem("nom"), l, { headers: this.headers, observe: "response" });

  }


}
