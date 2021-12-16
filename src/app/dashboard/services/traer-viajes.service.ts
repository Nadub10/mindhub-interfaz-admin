import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { ViajesEquipos } from 'src/app/shared/interfaces/viajesEquipos';
import { GetTravelsService } from './get-travels.service';
import { sort, sortInverso } from './funciones';

@Injectable({
  providedIn: 'root'
})
export class TraerViajesService {

  constructor(private getTravels:GetTravelsService) { }

  arrayBaseViajes:ViajesEquipos[]=[];
  viajesDisponibles:ViajesEquipos[]=[];
  historialViajes:ViajesEquipos[]=[];

  traerViajes(vista:string,...args:number[]){
    let array:Observable<ViajesEquipos[]>[]=[];
    args.forEach(i=>{
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
        if(vista.toLowerCase()==='historial'){
          this.historialViajes=this.historialViajes.sort(sortInverso)
        }
       // console.log(this.arrayBaseViajes)
      }
    )
  }
}
