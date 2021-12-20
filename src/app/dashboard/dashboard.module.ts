import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';
import { ComponentsSharedModule } from '../shared/components-shared/components-shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogServiceService } from './services/dialog-service.service';
import { HighchartsChartModule } from 'highcharts-angular';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AccederLocalStorageService } from './services/acceder-local-storage.service';
import { CrearUsuarioService } from './services/crear-usuario.service';
import { GetTravelsService } from './services/get-travels.service';
import { GetUsersService } from './services/get-users.service';
import { PostTravelService } from './services/post-travel.service';
import { PostUserService } from './services/post-user.service';
import { SelectUsuarioService } from './services/select-usuario.service';
import { TraerUsuariosService } from './services/traer-usuarios.service';
import { TraerViajesService } from './services/traer-viajes.service';
@NgModule({ 
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PagesModule,
    ComponentsModule,
    ComponentsSharedModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    SweetAlert2Module
  ],
  providers:[DialogServiceService,
            AccederLocalStorageService,
          CrearUsuarioService,
        GetTravelsService,GetUsersService,PostTravelService,PostUserService,SelectUsuarioService,TraerUsuariosService,TraerViajesService]
})
export class DashboardModule { }
