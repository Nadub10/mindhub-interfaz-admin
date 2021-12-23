import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from 'src/app/shared/interfaces/usuario';
import { AccederLocalStorageService } from '../../services/acceder-local-storage.service';


@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.scss']
})
export class InfoUsuarioComponent implements OnInit {
  datosUsuario:Usuario;
  boton:string;
  hide:boolean=true;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {item:Usuario,boton:string},
    ) {
      this.datosUsuario=data.item;
      this.boton=data.boton
     }
     
  ngOnInit(): void {
  }

}
