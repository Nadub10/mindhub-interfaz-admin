import { Injectable } from '@angular/core';
import { PostUserService } from './post-user.service';
import { Usuario } from '../../shared/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class CrearUsuarioService {

  constructor(
    private postUser:PostUserService,

  ) { }

  crearUsuario(user:Usuario,accion:string){
    this.postUser.postUser(
      user.fullName,
      user.email,
      user.cellPhone,
      user.address,
      user.password

        )
  }

  

}
