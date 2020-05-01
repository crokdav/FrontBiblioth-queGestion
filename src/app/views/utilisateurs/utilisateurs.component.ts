import { Component, OnInit, ViewChild } from '@angular/core';
import { UserManager } from 'src/app/model/UserManager';
import { UserManagerService } from 'src/app/service/user-manager.service';
import { first } from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';
import { Role } from 'src/app/model/Role';
import { RoleService } from 'src/app/service/role.service';


@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {

  elements: any = [];

  headElements = ['n°','Nom','Prenom','Login','Role','Action'];

  // @ViewChild(MatPaginator,{static:false}) paginator: MatPaginator;
  // @ViewChild(MatSort,{static:false}) sort: MatSort;

  // dataSource: MatTableDataSource<UserManager>;
  userForm: any = {};
  listUser: UserManager[];
  listRole:Role[];

  constructor( private userService:UserManagerService,private formBuilder: FormBuilder,private roleService:RoleService) {
    // this.dataSource = new MatTableDataSource([]);
   }

  ngOnInit(): void {
    this.userService.getAll().pipe(first()).subscribe(
      (data: UserManager[]) => {
        this.elements = data;
        // this.dataSource = new MatTableDataSource(data);
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
      });

      this.roleService.getAll().pipe(first()).subscribe(
        (data: Role[]) => {
          this.listRole = data;
          // this.dataSource = new MatTableDataSource(data);
          // this.dataSource.paginator = this.paginator;
          // this.dataSource.sort = this.sort;
        });


      
      //***  Connstruction de formulaire d'ajout  ******/
      this.userForm = this.formBuilder.group({
        'id': [""],
        'nom': ["", Validators.required],
        'prenom': ["", Validators.required],
        'login': ["", Validators.required],
        'password': ["", Validators.required],
        'roles': ["", Validators.required]
      });
  }


  delete(id:number)
  {
    this.userService.delete(id).pipe(first()).subscribe(
      resp => {
        if (resp.status == 200) {
          this.ngOnInit();
        }
        else { alert("error suppression"); }
      });
  }

  modifier(u:UserManager){
    this.userForm = this.formBuilder.group({
      'id': [u.id],
      'nom': [u.nom, Validators.required],
      'prenom': [u.prenom, Validators.required],
      'login': [u.login, Validators.required],
      'password': ["*****", Validators.required],
      'roles': [u.roles, Validators.required]
    });

  }

  onSubmit()
  {
    console.log(this.userForm.value.roles);
   const u : UserManager={
      id : this.userForm.value.id,
      nom:this.userForm.value.nom,
      prenom:this.userForm.value.prenom,
      login:this.userForm.value.login,
      password:this.userForm.value.password,
      roles: [{id:this.userForm.value.roles,nomRole:null}] }
    this.userService.save(u).pipe(first()).subscribe(
      resp => {
        if (resp.status == 200) {
          this.ngOnInit();
        }
        else { alert("error suppression"); }
      });

  }

}
