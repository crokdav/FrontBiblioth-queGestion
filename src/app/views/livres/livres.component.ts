import { Component, OnInit } from '@angular/core';
import { UserManager } from 'src/app/model/UserManager';
import { Role } from 'src/app/model/Role';
import { UserManagerService } from 'src/app/service/user-manager.service';
import { FormBuilder, Validators } from '@angular/forms';
import { RoleService } from 'src/app/service/role.service';
import { first } from 'rxjs/operators';
import { LivreService } from 'src/app/service/livre.service';
import { Livre } from 'src/app/model/Livre';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {

  elements: any = [];

  headElements = ['n°','Nom Livre','Auteur','Quantité','description','Action'];

  // @ViewChild(MatPaginator,{static:false}) paginator: MatPaginator;
  // @ViewChild(MatSort,{static:false}) sort: MatSort;

  // dataSource: MatTableDataSource<UserManager>;
  livreForm: any = {};
  listLivre: UserManager[];
  listRole:Role[];
  roleUser:string;

  
    searchString: string;

  constructor( private userService:UserManagerService,private formBuilder: FormBuilder,private roleService:RoleService
    ,private livreService:LivreService) {
    // this.dataSource = new MatTableDataSource([]);
   }

  ngOnInit(): void {
    this.livreService.getAll().pipe(first()).subscribe(
      (data: Livre[]) => {
        this.elements = data;
        // this.dataSource = new MatTableDataSource(data);
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
      });
      this.roleUser = localStorage.getItem("rolename");

      this.roleService.getAll().pipe(first()).subscribe(
        (data: Role[]) => {
          this.listRole = data;
          // this.dataSource = new MatTableDataSource(data);
          // this.dataSource.paginator = this.paginator;
          // this.dataSource.sort = this.sort;
        });


      
      //***  Connstruction de formulaire d'ajout  ******/
      this.livreForm = this.formBuilder.group({
        'id': [""],
        'nomLivre': ["", Validators.required],
        'auteur': ["", Validators.required],
        'quantite': ["", Validators.required],
        'description':["", Validators.required]
      });
  }


  delete(id:number)
  {
    this.livreService.delete(id).pipe(first()).subscribe(
      resp => {
        if (resp.status == 200) {
          this.ngOnInit();
        }
        else { alert("error suppression"); }
      });
  }

  modifier(u:Livre){
    this.livreForm = this.formBuilder.group({
      'id': [u.id],
      'nomLivre': [u.nomLivre, Validators.required],
      'auteur': [u.auteur, Validators.required],
      'quantite': [u.quantite, Validators.required],
      'description':[u.description, Validators.required]

    });

  }

  onSubmit()
  {
    console.log(this.livreForm.value.roles);
   const u : Livre={
      id : this.livreForm.value.id,
      nomLivre:this.livreForm.value.nomLivre,
      auteur:this.livreForm.value.auteur,
      quantite:this.livreForm.value.quantite,
    description: this.livreForm.value.description }
    this.livreService.save(u).pipe(first()).subscribe(
      resp => {
        if (resp.status == 200) {
          this.ngOnInit();
        }
        else { alert("error suppression"); }
      });

  }


  reserver(el)
  {
    this.livreService.reserver(el).pipe(first()).subscribe(
      resp => {
        if (resp.status == 200) {
          this.ngOnInit();
        }
        else { alert("error suppression"); }
      });

  }

 
}
