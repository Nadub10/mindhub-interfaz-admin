import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AccederLocalStorageService } from './acceder-local-storage.service';
import { PostTravelService } from './post-travel.service';
import { ViajesEquipos } from 'src/app/shared/interfaces/viajesEquipos';
import { UpdateTravel } from '../../shared/interfaces/update-travel';
import { SelectViajesService } from './select-viajes.service';
import Swal from'sweetalert2';
import { TraerViajesService } from './traer-viajes.service';
@Injectable({
  providedIn: 'root'
})
export class CambiarStatusTravelService {

  constructor(
    private postTravelService:PostTravelService,
    private accederLocalStorage:AccederLocalStorageService,
    public selectViaje:SelectViajesService,
    public traerViajes:TraerViajesService
    
  ) { }

 objetoModificarViaje!:UpdateTravel;
 setObjetoModificarViaje(objeto:UpdateTravel){
   this.objetoModificarViaje=objeto;
 }
//por el momento esta funcion solo modifica 
//el status de 1 viaje con la info q me traigo
//NO PASA AUTOMATICAMENTE DE 1 ESTADO AL OTRO NI RENUNCIA
 modificarViaje(){
   this.postTravelService.updateTravel(
     this.objetoModificarViaje.travelId,
     this.objetoModificarViaje.statusTravel,
     this.objetoModificarViaje.userOperation,
     this.objetoModificarViaje.cadeteId,
     this.objetoModificarViaje.renuncia,
     this.objetoModificarViaje.observaciones
   )
   .subscribe(
     resp=>{
       console.log(resp)
       //alert('Viaje Modificado con Exito')
       Swal.fire({
        icon: 'success',
        title: 'Buen Trabajo!',
        text: 'Viaje Modificado con Exito!',
        
      })
      this.selectViaje.tipoViajes='viajesActivos';
      this.traerViajes.setStatusTravel('todos',1,2,3,4,5,6,7,8);
       this.traerViajes.traerViajes();
     },
     error=>{
       console.log(error)
       //alert(error.error)
       if(error.error.includes('3 viajes')){
        Swal.fire({
          icon: 'error',
          title: 'Algo salió mal!',
          text: 'El cadete supera la cantidad máxima de 4 viajes sin Recolectar al mismo tiempo!',
          
        })
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Algo salió mal!',
          text: error.error,
          
        })
      }
       
     }
   )
 }



}
