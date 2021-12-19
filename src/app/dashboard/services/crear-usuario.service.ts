import { Injectable } from '@angular/core';
import { PostUserService } from './post-user.service';
import { Usuario } from '../../shared/interfaces/usuario';
import Swal from'sweetalert2';
import { Router } from '@angular/router';
import { SelectUsuarioService } from './select-usuario.service';
import { TraerUsuariosService } from './traer-usuarios.service';
@Injectable({
  providedIn: 'root'
})
export class CrearUsuarioService {

  constructor(
    private postUser:PostUserService,
    private route:Router,
    private selectUsuario:SelectUsuarioService,
    private traerUsuario:TraerUsuariosService

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
          Swal.fire({
            icon: 'error',
            title: 'Algo salió mal!',
            text: error.error,
            
          })
        }
      )
  }

  

  accionesUpdateUser(accion:string){
    
    switch(accion.toLowerCase()){
      case 'crear':
        
        Swal.fire({
          icon: 'success',
          title: 'Buen Trabajo!',
          text: 'Usuario Creado con Exito',
          
        })
        this.selectUsuario.tipoUsuario='todos';
        this.traerUsuario.traerUsuarios('todos')
        this.route.navigate(['dashboard/listas'])
        
        break;
      case 'modificar':
        
        Swal.fire({
          icon: 'success',
          title: 'Buen Trabajo!',
          text: 'Usuario modificado con Exito',
          
        })
        this.selectUsuario.tipoUsuario='todos';
        this.traerUsuario.traerUsuarios('todos')
        break;
      case 'eliminar':
        
        Swal.fire({
          icon: 'success',
          title: 'Buen Trabajo!',
          text: 'Usuario Eliminado con Exito',
          
        })
        this.selectUsuario.tipoUsuario='eliminados';
        this.traerUsuario.traerUsuarios('eliminados')
        break;
      
        
    }
  }

}
