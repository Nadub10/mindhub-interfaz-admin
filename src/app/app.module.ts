import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HighchartsChartModule } from 'highcharts-angular';
import { DialogServiceService } from './dashboard/services/dialog-service.service';
import { AccederLocalStorageService } from 'src/app/dashboard/services/acceder-local-storage.service';
import { GetTravelsService } from './dashboard/services/get-travels.service';
import { CrearUsuarioService } from './dashboard/services/crear-usuario.service';
import { GetUsersService } from './dashboard/services/get-users.service';
import { PostTravelService } from './dashboard/services/post-travel.service';
import { PostUserService } from './dashboard/services/post-user.service';
import { SelectUsuarioService } from './dashboard/services/select-usuario.service';
import { TraerUsuariosService } from './dashboard/services/traer-usuarios.service';
import { TraerViajesService } from './dashboard/services/traer-viajes.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    HighchartsChartModule
  ],
  providers:[DialogServiceService,
    AccederLocalStorageService,
  CrearUsuarioService,
GetTravelsService,GetUsersService,PostTravelService,PostUserService,SelectUsuarioService
,TraerUsuariosService,TraerViajesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
