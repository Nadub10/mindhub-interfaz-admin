import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { ViajesComponent } from './viajes/viajes.component';
import { HistorialComponent } from './historial/historial.component';
import { ListasComponent } from './listas/listas.component';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardRoutingModule } from '../dashboard-routing.module';
import { AuthRoutingModule } from '../../auth/auth-routing.module';
import { MaterialModule } from '../../shared/material/material.module';
import { ComponentsModule } from '../components/components.module';
import { ComponentsSharedModule } from '../../shared/components-shared/components-shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegistroComponent,
    ViajesComponent,
    HistorialComponent,
    ListasComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AuthRoutingModule,
    MaterialModule,
    ComponentsModule,
    ComponentsSharedModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class PagesModule { }
