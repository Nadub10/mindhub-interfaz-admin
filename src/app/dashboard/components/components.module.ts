import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { DashboardRoutingModule } from '../dashboard-routing.module';
import { MaterialModule } from '../../shared/material/material.module';
import { ComponentsSharedModule } from 'src/app/shared/components-shared/components-shared.module';
import { AuthRoutingModule } from '../../auth/auth-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TablaViajesComponent } from './tabla-viajes/tabla-viajes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectViajesComponent } from './select-viajes/select-viajes.component';
import { TablaHistorialComponent } from './tabla-historial/tabla-historial.component';
import { SelectListaComponent } from './select-lista/select-lista.component';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { AccionesViajesComponent } from './acciones-viajes/acciones-viajes.component';
import { FormEditarUserComponent } from './form-editar-user/form-editar-user.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { InfoViajeComponent } from './info-viaje/info-viaje.component';
import { InfoUsuarioComponent } from './info-usuario/info-usuario.component';



@NgModule({
  declarations: [
    SideMenuComponent,
    FormRegistroComponent,
    TablaViajesComponent,
    SelectViajesComponent,
    TablaHistorialComponent,
    SelectListaComponent,
    TablaUsuariosComponent,
    AccionesViajesComponent,
    FormEditarUserComponent,
    InfoViajeComponent,
    InfoUsuarioComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    ComponentsSharedModule,
    AuthRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    SweetAlert2Module
  ],
  exports:[
    SideMenuComponent,
    FormRegistroComponent,
    TablaViajesComponent,
    SelectViajesComponent,
    TablaHistorialComponent,
    SelectListaComponent,
    TablaUsuariosComponent,
    AccionesViajesComponent,
    FormEditarUserComponent,
    InfoViajeComponent
  ]
})
export class ComponentsModule { }
