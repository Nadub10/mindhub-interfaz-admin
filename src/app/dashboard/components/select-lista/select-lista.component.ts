import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SelectUsuarioService } from '../../services/select-usuario.service';

@Component({
  selector: 'app-select-lista',
  templateUrl: './select-lista.component.html',
  styleUrls: ['./select-lista.component.scss']
})
export class SelectListaComponent implements OnInit {

  constructor(public selectUsuario:SelectUsuarioService) { }

  ngOnInit(): void {
  }
  @Output() selectionChange: EventEmitter<string>= new EventEmitter();
  tipoUsuario:string=this.selectUsuario.tipoUsuario
  cambiaOpcion(){
    this.selectionChange.emit(this.selectUsuario.tipoUsuario)
  }
}
