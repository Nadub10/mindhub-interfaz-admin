import { Component, OnInit } from '@angular/core';
import { TraerUsuariosService } from '../../services/traer-usuarios.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss']
})
export class ListasComponent implements OnInit {

  constructor(public traerUsuarios:TraerUsuariosService) { }

  ngOnInit(): void {
    this.infoTabla('admin')
  }
  infoTabla(parametro:string){
    
      this.traerUsuarios.traerUsuarios(parametro)
       
   
  }
}
