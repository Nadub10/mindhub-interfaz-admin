import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { TraerViajesService } from '../../services/traer-viajes.service';
import { infoTablasViajesEquipos } from '../../../shared/interfaces/infoTablasViajesEquipos';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  loading=true;
  arrayTodos!:infoTablasViajesEquipos [];
  arrayPendiente!:infoTablasViajesEquipos [];
  arrayencurso!:infoTablasViajesEquipos [];
  arrayentregados!:infoTablasViajesEquipos [];
  arrayentodoit!:infoTablasViajesEquipos [];
  arraysinconfirmar!:infoTablasViajesEquipos [];
  constructor(public traerViajes:TraerViajesService) { }
  
  ngOnInit(): void {
    
    this.traerViajes.traerViajesdashboard('activos',1,2,3,4,5,6,7,8)
    this.traerViajes.traerViajesdashboard('pendientes',1,5)
    this.traerViajes.traerViajesdashboard('entregados',9);
    this.traerViajes.traerViajesdashboard('sinConfirmar',8);
    this.traerViajes.traerViajesdashboard('enTodoIT',4);
    this.traerViajes.traerViajesdashboard('encurso',2,3,6,7)
    
    this.traerViajes.getArrayPrueba().subscribe(
      resp=>{
        this.arrayTodos=resp;
        
      }
    )
    this.traerViajes.getarrayPendiente().subscribe(
      resp=>{
        this.arrayPendiente=resp;
        
      }
    )
    this.traerViajes.getArrayenCurso().subscribe(
      resp=>{
        this.arrayencurso=resp;
        
      }
    )
    this.traerViajes.getArrayentodoIT().subscribe(
      resp=>{
        this.arrayentodoit=resp;
        
      }
    )
    this.traerViajes.getArraySinconfirmar().subscribe(
      resp=>{
        this.arraysinconfirmar=resp;
        
      }
    )
    this.traerViajes.getArrayentregados().subscribe(
      resp=>{
        this.arrayentregados=resp;
        this.loading=false;
      }
    )
  }

}
