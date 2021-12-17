import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViajesEquipos } from 'src/app/shared/interfaces/viajesEquipos';
import { AccionesViajesComponent } from '../components/acciones-viajes/acciones-viajes.component';

@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

  constructor(public dialog: MatDialog) { }

  openBottomSheet(item:ViajesEquipos,boton:string): void {
    this.dialog.open(AccionesViajesComponent, {
      data: {item,boton}
    });
  }
}
