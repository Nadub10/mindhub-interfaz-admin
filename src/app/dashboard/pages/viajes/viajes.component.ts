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
  arrayViajes:ViajesEquipos[]=[];
  constructor(public traerViajes:TraerViajesService
    ,public selectViaje:SelectViajesService) { }
    
  ngOnInit(): void {
    this.infoTabla(this.selectViaje.tipoViajes);
    this.traerViajes.traerViajes();
  }
  

  infoTabla(parametro:string){
    
    if(parametro==='viajesActivos'){
      this.traerViajes.setStatusTravel('todos',1,2,3,4,5,6,7,8);
       this.traerViajes.traerViajes();
   

    }
    else if(parametro==='viajesPendientes'){
      this.traerViajes.setStatusTravel('todos',1,5);
       this.traerViajes.traerViajes();
  
    
    }
    else if(parametro==='enTodoIT'){
      this.traerViajes.setStatusTravel('todos',4);
       this.traerViajes.traerViajes();
  
    
    }
    else if(parametro==='entregadosSinConfirmacion'){
      this.traerViajes.setStatusTravel('todos',8);
       this.traerViajes.traerViajes();
  
    
    }
    else{
      this.traerViajes.setStatusTravel('todos',2,6,3,7);
      this.traerViajes.traerViajes();
   
    }
  }

  

}
