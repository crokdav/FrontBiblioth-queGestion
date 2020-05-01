import { Component, OnInit } from '@angular/core';
import { UserManager } from 'src/app/model/UserManager';
import { Role } from 'src/app/model/Role';
import { LivreService } from 'src/app/service/livre.service';
import { Livre } from 'src/app/model/Livre';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-mes-livre',
  templateUrl: './mes-livre.component.html',
  styleUrls: ['./mes-livre.component.css']
})
export class MesLivreComponent implements OnInit {

  livreForm: any = {};
  listLivre: UserManager[];
  listRole:Role[];
  roleUser:string;
  
  elements: any = [];

  headElements = ['n°','Nom Livre','Auteur','Quantité','description','Action'];
  
  constructor(private livreService:LivreService) {
   }

  ngOnInit(): void {
    this.livreService.getAllByUser().pipe(first()).subscribe(
      (data: Livre[]) => {
        this.elements = data;
      });
  }

  annuler(l: Livre)
  {

    console.log(l);
    this.livreService.annuler(l).pipe(first()).subscribe(
      resp => {
        if (resp.status == 200) {
          this.ngOnInit();
        }
        else { alert("error suppression"); }
      });

  }

  

}
