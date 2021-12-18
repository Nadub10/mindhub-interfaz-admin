import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Usuario } from 'src/app/shared/interfaces/usuario';
import { ViajesEquipos } from 'src/app/shared/interfaces/viajesEquipos';
import { AccionesViajesComponent } from '../components/acciones-viajes/acciones-viajes.component';
import { FormEditarUserComponent } from '../components/form-editar-user/form-editar-user.component';

@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

  constructor(public dialog: MatDialog) { }

  abrirVentanaEditViaje(item:ViajesEquipos,boton:string): void {
    this.dialog.open(AccionesViajesComponent, {
      data: {item,boton}
    });
  }
  abrirVentanaEditUser(item:Usuario,boton:string): void {
    this.dialog.open(FormEditarUserComponent, {
      data: {item,boton}
    });
  }
}
