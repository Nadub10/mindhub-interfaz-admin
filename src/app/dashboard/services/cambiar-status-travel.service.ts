import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AccederLocalStorageService } from './acceder-local-storage.service';
import { PostTravelService } from './post-travel.service';
import { ViajesEquipos } from 'src/app/shared/interfaces/viajesEquipos';

@Injectable({
  providedIn: 'root'
})
export class CambiarStatusTravelService {

  constructor(
    private postTravelService:PostTravelService,
    private accederLocalStorage:AccederLocalStorageService,
    private snackBar:MatSnackBar
  ) { }

  /* cambiarStatusTravel(item:ViajesEquipos,accion:string){
    this.postTravelService.updateTravel(
      item.id,
      this.codigoViaje(accion,item.lastStatusTravel),
      item.travelEquipmentDTOs[item.travelEquipmentDTOs.length -1].operator.id,

    )
  } */
  codigoViaje(accion:string,lastStatusTravel:number):number{
    if(accion==='cancelar'){
      return lastStatusTravel===2?1 :5
    }
    return lastStatusTravel+1
  }
}
