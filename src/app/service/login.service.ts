import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserManager } from '../model/UserManager';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url:string = "http://localhost:8080/user"



  constructor(private http: HttpClient) { 
  }


  login(login:string,password:string){
    return this.http.post("http://localhost:8080/login",{login:login,password:password},{observe:'response'});
  }


}
