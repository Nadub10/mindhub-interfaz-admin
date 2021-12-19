import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AccederLocalStorageService } from './acceder-local-storage.service';
import { PostTravelService } from './post-travel.service';
import { ViajesEquipos } from 'src/app/shared/interfaces/viajesEquipos';
import { UpdateTravel } from '../../shared/interfaces/update-travel';
import Swal from'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class CambiarStatusTravelService {

  constructor(
    private postTravelService:PostTravelService,
    private accederLocalStorage:AccederLocalStorageService,
    
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
     },
     error=>{
       console.log(error)
       //alert(error.error)
       Swal.fire({
        icon: 'error',
        title: 'Algo salió mal!',
        text: error.error,
        
      })
     }
   )
 }



}
