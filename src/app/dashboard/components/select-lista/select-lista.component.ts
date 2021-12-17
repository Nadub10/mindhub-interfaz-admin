import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-lista',
  templateUrl: './select-lista.component.html',
  styleUrls: ['./select-lista.component.scss']
})
export class SelectListaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() selectionChange: EventEmitter<string>= new EventEmitter();
  tipoUsuario:string='admin'
  cambiaOpcion(){
    this.selectionChange.emit(this.tipoUsuario)
  }
}
