import { Component, OnInit } from '@angular/core';
import { TraerUsuariosService } from '../../services/traer-usuarios.service';
import { SelectUsuarioService } from '../../services/select-usuario.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss']
})
export class ListasComponent implements OnInit {

  constructor(public traerUsuarios:TraerUsuariosService,
    public selectUsuario:SelectUsuarioService) { }

  ngOnInit(): void {
    this.infoTabla(this.selectUsuario.tipoUsuario)
  }
  infoTabla(parametro:string){
    
      this.traerUsuarios.traerUsuarios(parametro)
       
   
  }
}
