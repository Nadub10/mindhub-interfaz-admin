import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SelectViajesService } from '../../services/select-viajes.service';

@Component({
  selector: 'app-select-viajes',
  templateUrl: './select-viajes.component.html',
  styleUrls: ['./select-viajes.component.scss']
})
export class SelectViajesComponent implements OnInit {

  constructor(public selectViajes:SelectViajesService) { }

  ngOnInit(): void {
  }
  @Output() selectionChange: EventEmitter<string>= new EventEmitter();
  tipoViajes:string=this.selectViajes.tipoViajes
  cambiaOpcion(){
    this.selectionChange.emit(this.selectViajes.tipoViajes)
  }
}
