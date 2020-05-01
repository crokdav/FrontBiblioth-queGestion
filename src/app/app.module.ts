import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LivresComponent } from './views/livres/livres.component';
import { UtilisateursComponent } from './views/utilisateurs/utilisateurs.component';
import { MesLivreComponent } from './views/mes-livre/mes-livre.component';
import { FilterPipe } from './views/livres/FilterPipe';
import { NotificationComponent } from './views/notification/notification.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    LivresComponent,
    UtilisateursComponent,
    MesLivreComponent,
    FilterPipe,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    BrowserModule
        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
