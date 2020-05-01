import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';
import { LivresComponent } from './views/livres/livres.component';
import { UtilisateursComponent } from './views/utilisateurs/utilisateurs.component';
import { MesLivreComponent } from './views/mes-livre/mes-livre.component';
import { NotificationComponent } from './views/notification/notification.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'login Page'
    }
  },
  {
  path: 'dashboard',
  component: DashboardComponent,
  data: {
    title: 'Dashboard Page'
  },
  children : [
    {
      path: 'livre',
      component: LivresComponent,
      data: {
        title: 'livre Page'
      }
    },
    {
      path: 'notification',
      component: NotificationComponent,
      data: {
        title: 'notification Page'
      }
    },
    {
      path: 'mesLivre',
      component: MesLivreComponent,
      data: {
        title: 'Mes livre Page'
      }
    },
    {
      path: 'utilisateurs',
      component: UtilisateursComponent,
      data: {
        title: 'utilisateur Page'
      }
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
