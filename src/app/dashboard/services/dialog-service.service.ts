import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Usuario } from 'src/app/shared/interfaces/usuario';
import { ViajesEquipos } from 'src/app/shared/interfaces/viajesEquipos';
import { AccionesViajesComponent } from '../components/acciones-viajes/acciones-viajes.component';
import { FormEditarUserComponent } from '../components/form-editar-user/form-editar-user.component';
import { infoTablasViajesEquipos } from '../../shared/interfaces/infoTablasViajesEquipos';
import { InfoViajeComponent } from '../components/info-viaje/info-viaje.component';

@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

  constructor(public dialog: MatDialog) { }

  abrirVentanaEditViaje(item:infoTablasViajesEquipos,boton:string): void {
    this.dialog.open(AccionesViajesComponent, {
      data: {item,boton}
    });
  }
  abrirVentanaEditUser(item:Usuario,boton:string): void {
    this.dialog.open(FormEditarUserComponent, {
      data: {item,boton}
    });
  }
  abrirVentanaInfoViaje(item:infoTablasViajesEquipos,boton:string): void {
    this.dialog.open(InfoViajeComponent, {
      data: {item,boton}
    });
  }
}
