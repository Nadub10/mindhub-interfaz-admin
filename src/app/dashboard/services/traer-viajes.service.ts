import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { ViajesEquipos } from 'src/app/shared/interfaces/viajesEquipos';
import { GetTravelsService } from './get-travels.service';
import { sort, sortInverso } from './funciones';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root'
})
export class TraerViajesService {

  constructor(private getTravels:GetTravelsService) { }

  arrayBaseViajes:ViajesEquipos[]=[];
  viajesDisponibles:ViajesEquipos[]=[];
  historialViajes:ViajesEquipos[]=[];
  vista!:string;
  arrayStatusTravel!:number[];
  setStatusTravel(vista:string,...args:number[]){
    this.vista=vista;
    this.arrayStatusTravel=args;
    console.log(this.arrayStatusTravel)
  }

  traerViajes(){
    let array:Observable<ViajesEquipos[]>[]=[];
    this.arrayStatusTravel.forEach(i=>{
      array.push(this.getTravels.getTravels(i));
    })
    forkJoin([...array])
    .subscribe(
      resp => {
        this.arrayBaseViajes=resp.reduce((acc,item)=>{
          acc.push(...item)
          return acc
        },[])
        this.arrayBaseViajes.sort(sort);
        this.viajesDisponibles=[...this.arrayBaseViajes];
        console.log(this.viajesDisponibles)
        this.dataSource= new MatTableDataSource(this.viajesDisponibles);
        //console.log(this.dataSource)
        if(this.vista.toLowerCase()==='historial'){
          this.historialViajes=this.historialViajes.sort(sortInverso)
        }
       // console.log(this.arrayBaseViajes)
      }
    )
  }
  dataSource!: MatTableDataSource<ViajesEquipos>;
  
}
