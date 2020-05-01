import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService:LoginService, private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("nom")!=null)
    {
      this.router.navigate(['/dashboard']);
    
    }

    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
   });
  }

  onSubmit() {
    const helper = new JwtHelperService();
    this.loginService.login(this.loginForm.value.login,this.loginForm.value.password).pipe(first()).subscribe(
      data => {
        localStorage.setItem("token", data.headers.get('Authorization'));
        const decodedToken = helper.decodeToken(data.headers.get('Authorization'));
       
        const list_roles = [];
        for (var i = 0; i <= Object.keys(decodedToken.roles).length - 1; i++) {
          list_roles.push(decodedToken.roles[i].authority);
        }
        localStorage.setItem("nom", decodedToken.sub);
        localStorage.setItem("rolename", decodedToken.roles[0].authority);
        this.router.navigate(["/dashboard"]);
      },
      error => {
        alert("verifier vos donnéés !!");
      });


  }

}
