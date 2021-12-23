import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { infoTablasViajesEquipos } from '../../../shared/interfaces/infoTablasViajesEquipos';
import { AccederLocalStorageService } from '../../services/acceder-local-storage.service';

@Component({
  selector: 'app-info-viaje',
  templateUrl: './info-viaje.component.html',
  styleUrls: ['./info-viaje.component.scss']
})
export class InfoViajeComponent implements OnInit {
  infoViaje:infoTablasViajesEquipos;
  boton:string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {item:infoTablasViajesEquipos,boton:string},
    ) {
      this.infoViaje=data.item;
      this.boton=data.boton
     }

  ngOnInit(): void {
  }
  
  statusTravelMap: any = {
    '1': 'Pendiente a retirar', '2': 'Retiro asignado', '3': 'Retirado','4':'Pendiente de reparación',
    '5':'Reparado', '6':'Entrega asignada', '7':'Pendiente de entrega','8':'Entregado','9':'Recibido'
  };
}
