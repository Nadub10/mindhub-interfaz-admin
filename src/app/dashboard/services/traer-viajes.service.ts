import { Injectable } from '@angular/core';
import { Observable, forkJoin, Subject } from 'rxjs';
import { ViajesEquipos } from 'src/app/shared/interfaces/viajesEquipos';
import { GetTravelsService } from './get-travels.service';
import { sort, sortInverso } from './funciones';
import { Operator } from 'src/app/shared/interfaces/operator';
import { Equipment } from 'src/app/shared/interfaces/equipment';
interface arrayBaseEquipos{
  id:number,
  lastStatusTravel:number,
  operationDate:string,
  observations?:string,
  cadeteId?:number,
  cadetefullName?:string,
  
  equipmentId:number,
  equipmentMarca:string,
  equipmentModelo:string,
  equipmentFalla:string,
  clienteId:number,
  clienteFullName:string,
  clienteEmail:string,
  clienteDireccion:string
}
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
  public shareDataSubject = new Subject<ViajesEquipos[]>();
  public arrayHistorial = new Subject<ViajesEquipos[]>();
  public arrayPrueba = new Subject<arrayBaseEquipos[]>();
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
        
        //console.log(this.dataSource)
        if(this.vista.toLowerCase()==='historial'){
          this.historialViajes=this.arrayBaseViajes.sort(sortInverso)
          this.arrayHistorial.next(this.historialViajes)

        }
        else if(this.vista.toLowerCase()==='prueba'){
          let arrayNuevo:arrayBaseEquipos [] = this.transformarArray(this.arrayBaseViajes);
          this.arrayPrueba.next(arrayNuevo);
        }
        else{
          this.arrayBaseViajes.sort(sort);
          this.shareDataSubject.next(this.arrayBaseViajes)
        }
       // console.log(this.arrayBaseViajes)
      }
    )
  }
  public getSubject() {
    return this.shareDataSubject;
  }
  public getArrayHistorial() {
    return this.arrayHistorial;
  }
  public getArrayNuevo() {
    return this.arrayPrueba;
  }
  
  transformarArray(arrayViajes:ViajesEquipos[]):arrayBaseEquipos[]{
    let arrayPrueba:arrayBaseEquipos[]=[];
    let itemPrueba:arrayBaseEquipos;
    arrayViajes.forEach(item=>{
      itemPrueba={
        id:item.id,
        lastStatusTravel:item.lastStatusTravel,
        operationDate:item.travelEquipmentDTOs[item.travelEquipmentDTOs.length -1].operationDate ,
        observations:item.travelEquipmentDTOs[item.travelEquipmentDTOs.length -1].observation,
        cadeteId:item.travelEquipmentDTOs[item.travelEquipmentDTOs.length -1].cadete?.id,
        cadetefullName:item.travelEquipmentDTOs[item.travelEquipmentDTOs.length -1].cadete?.fullName,
       
        equipmentId:item.travelEquipmentDTOs[item.travelEquipmentDTOs.length -1].equipment.id,
        equipmentMarca:item.travelEquipmentDTOs[item.travelEquipmentDTOs.length -1].equipment.mark,
        equipmentModelo:item.travelEquipmentDTOs[item.travelEquipmentDTOs.length -1].equipment.model,
        equipmentFalla:item.travelEquipmentDTOs[item.travelEquipmentDTOs.length -1].equipment.failure,
        clienteId:item.travelEquipmentDTOs[item.travelEquipmentDTOs.length -1].equipment.clientId,
        clienteFullName:item.travelEquipmentDTOs[item.travelEquipmentDTOs.length -1].equipment.cliente.fullName,
        clienteEmail:item.travelEquipmentDTOs[item.travelEquipmentDTOs.length -1].equipment.cliente.email,
        clienteDireccion:item.travelEquipmentDTOs[item.travelEquipmentDTOs.length -1].equipment.cliente.address
      }
      arrayPrueba.push(itemPrueba);
    })
    return arrayPrueba;
  }
}
