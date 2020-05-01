import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   ConnectedUser:String;
   roleUser:string;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("nom")==null)
    {
      this.router.navigate(['/login']);
    
    }
    this.ConnectedUser = localStorage.getItem("nom");
    this.roleUser = localStorage.getItem("rolename");
  }

  
  
  logout()
  {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }

}
