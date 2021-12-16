import { Injectable } from '@angular/core';
import { PostUserService } from './post-user.service';
import { Usuario } from '../../shared/interfaces/usuario';
import { MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CrearUsuarioService {

  constructor(
    private postUser:PostUserService,

  ) { }
    user!:Usuario;
  setUser(user:Usuario){
    this.user=user;
  }

//POR EL MOMENTO ESTA FUNCION SOLO CREA 1 USUARIO, NO LO MODIFICA
  //NI LO ELIMINA
  crearUsuario(accion:string){
    this.postUser.postUser(
      this.user.id,
      this.user.fullName,
      this.user.email,
      this.user.cellPhone,
      this.user.address,
      this.user.password,
      this.user.isAccepted,
      this.user.isDeleted,
      this.user.vehicle,
      this.user.rol,      
      this.user.observations,
      )
      .subscribe(
        resp=>{
          console.log(resp)
          this.accionesUpdateUser(accion);
        },
        error=>{
          console.log(error)
          alert(error.error)
        }
      )
  }

  

  accionesUpdateUser(accion:string){
    const conf = new MatSnackBarConfig();
    conf.panelClass = ['mensaje'];
    conf.duration = 4000;
    switch(accion.toLowerCase()){
      case 'crear':
        alert('Usuario Creado con Exito')
        /* this.snackBar.open('Viaje Seleccionado con Éxito!', 'OK',conf)
        this.openLink(evento);
        this.viajes.traerViajes('disponibles',undefined,1,5);
        this.vistaSelect.selected='Viajes en Curso/Aceptados'; */
        
        break;
      case 'modificar':
        alert('Usuario modificado con Exito')
        /* this.snackBar.open('Viaje Recolectado con Éxito!', 'OK',conf)
        this.openLink(evento);
        this.viajes.traerViajes('aceptados',this.accederLocalStorage.idCadete,2,6,3,7);
        this.vistaSelect.selected='Viajes en Curso/Aceptados'; */
        break;
      case 'eliminar':
        alert('Usuario Eliminado con Exito')
        /* this.snackBar.open('Viaje Finalizado con Éxito!', 'OK',conf)
        this.openLink(evento);
        this.viajes.traerViajes('aceptados',this.accederLocalStorage.idCadete,2,6,3,7);
        this.vistaSelect.selected='Viajes en Curso/Aceptados'; */
        break;
      
        
    }
  }

}
