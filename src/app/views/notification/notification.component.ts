import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/service/notification.service';
import { first } from 'rxjs/operators';
import { Livre } from 'src/app/model/Livre';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  elements: any = [];

  headElements = ['id','date','etudiant','nom livre','description'];

  constructor(private notifcService:NotificationService) { }

  ngOnInit(): void {
    this.notifcService.getAll().pipe(first()).subscribe(
      (data: Notification[]) => {
        this.elements = data;
        // this.dataSource = new MatTableDataSource(data);
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
      });
  }

}
