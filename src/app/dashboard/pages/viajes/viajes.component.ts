import { Component, OnInit,  EventEmitter, Output } from '@angular/core';
import { TraerViajesService } from '../../services/traer-viajes.service';
import { SelectViajesService } from '../../services/select-viajes.service';
import { ViajesEquipos } from 'src/app/shared/interfaces/viajesEquipos';




@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.scss']
})
export class ViajesComponent implements OnInit {

  constructor(public traerViajes:TraerViajesService
    ,public selectViaje:SelectViajesService) { }
    arrayViajes:ViajesEquipos[]=[];

    
  ngOnInit(): void {
    this.infoTabla('viajesActivos');
    this.traerViajes.traerViajes();
    this.traerViajes.viajesDisponibles;
    this.arrayViajes=this.traerViajes.viajesDisponibles;
    console.log(this.arrayViajes)
  }
  

  infoTabla(parametro:string){
    console.log('padree')
    console.log(parametro)
    if(parametro==='viajesActivos'){
      this.traerViajes.setStatusTravel('todos',1,2,3,4,5,6,7);
      this.traerViajes.traerViajes();
    this.traerViajes.viajesDisponibles;
    
    this.arrayViajes=this.traerViajes.viajesDisponibles;

    }
    else if(parametro==='viajesPendientes'){
      this.traerViajes.setStatusTravel('todos',1,5);
      this.traerViajes.traerViajes();
    this.traerViajes.viajesDisponibles;
    
    this.arrayViajes=this.traerViajes.viajesDisponibles;
    
    }
    else{
      this.traerViajes.setStatusTravel('todos',2,6,3,7);
      this.traerViajes.traerViajes();
    this.traerViajes.viajesDisponibles;
    this.arrayViajes=this.traerViajes.viajesDisponibles;
    }
  }

  

}
