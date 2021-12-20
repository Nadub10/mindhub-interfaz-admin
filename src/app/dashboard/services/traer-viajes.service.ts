import { Injectable } from '@angular/core';
import { Observable, forkJoin, Subject } from 'rxjs';
import { ViajesEquipos } from 'src/app/shared/interfaces/viajesEquipos';
import { GetTravelsService } from './get-travels.service';
import { sort, sortInverso, sort2, sortInverso2 } from './funciones';
import { Operator } from 'src/app/shared/interfaces/operator';
import { Equipment } from 'src/app/shared/interfaces/equipment';
import { infoTablasViajesEquipos } from 'src/app/shared/interfaces/infoTablasViajesEquipos';

@Injectable({
  providedIn: 'root'
})
export class TraerViajesService {

  constructor(private getTravels:GetTravelsService) { }

  arrayBaseViajes:ViajesEquipos[]=[];
  
  vista!:string;
  arrayStatusTravel!:number[];
  public arrayViajes = new Subject<infoTablasViajesEquipos[]>();

  //SUBJECT CON TIPO PARA REESTRUCTURAR ARRAY
  public arrayHistorial = new Subject<infoTablasViajesEquipos[]>();
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
        
        
         if(this.vista.toLowerCase()==='historial'){
          let arrayHistorialBase:infoTablasViajesEquipos [] = this.transformarArray(this.arrayBaseViajes);
          arrayHistorialBase.sort(sortInverso2)
          this.arrayHistorial.next(arrayHistorialBase);
        }
        else{
          let nuevoArrayBaseViajes:infoTablasViajesEquipos [] = this.transformarArray(this.arrayBaseViajes);
          nuevoArrayBaseViajes.sort(sort2);
          this.arrayViajes.next(nuevoArrayBaseViajes);
          
          
        }
       
      }
    )
  }
  
   arrayDisponiblesPrueba!:infoTablasViajesEquipos [];
   arrayenCursoPrueba!:infoTablasViajesEquipos []
   arrayPendientesPrueba!:infoTablasViajesEquipos []
   arrayEntregadosPrueba!:infoTablasViajesEquipos [];
   arraysinConfirmarPrueba!:infoTablasViajesEquipos [];
   arrayenTODOITPrueba!:infoTablasViajesEquipos []
  traerViajesdashboard(vista:string,...args:number[]){
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
        
        
         if(vista==='activos'){
          this.arrayDisponiblesPrueba = this.transformarArray(this.arrayBaseViajes);
          this.arraypruebadas.next(this.arrayDisponiblesPrueba);

        }
        else if(vista==='pendientes'){
          this.arrayPendientesPrueba = this.transformarArray(this.arrayBaseViajes);
          this.arrayPendiente.next(this.arrayPendientesPrueba);

        }
        else if(vista==='entregados'){
          this.arrayEntregadosPrueba = this.transformarArray(this.arrayBaseViajes);
          this.arrayEntregados.next(this.arrayEntregadosPrueba);

        }
        else if(vista==='sinConfirmar'){
          this.arraysinConfirmarPrueba = this.transformarArray(this.arrayBaseViajes);
          this.arraySinConfirmar.next(this.arraysinConfirmarPrueba);

        }
        else if(vista==='enTodoIT'){
          this.arrayenTODOITPrueba = this.transformarArray(this.arrayBaseViajes);
          this.arrayENTODOIT.next(this.arrayenTODOITPrueba);

        }
        else{
          this.arrayenCursoPrueba = this.transformarArray(this.arrayBaseViajes);
          this.arrayEncurso.next(this.arrayenCursoPrueba);
          
        }
        
       
      }
    )
  }
  public arraypruebadas = new Subject<infoTablasViajesEquipos[]>();
  public getArrayPrueba() {
    return this.arraypruebadas;
  }
  public arrayEncurso = new Subject<infoTablasViajesEquipos[]>();
  public getArrayenCurso() {
    return this.arrayEncurso;
  }
  public arrayPendiente = new Subject<infoTablasViajesEquipos[]>();
  public getarrayPendiente() {
    return this.arrayPendiente;
  }
  public arrayENTODOIT = new Subject<infoTablasViajesEquipos[]>();
  public getArrayentodoIT() {
    return this.arrayENTODOIT;
  }
  public arrayEntregados = new Subject<infoTablasViajesEquipos[]>();
  public getArrayentregados() {
    return this.arrayEntregados;
  }
  public arraySinConfirmar = new Subject<infoTablasViajesEquipos[]>();
  public getArraySinconfirmar() {
    return this.arraySinConfirmar;
  }

  public getArrayViajes() {
    return this.arrayViajes;
  }
  public getArrayHistorial() {
    return this.arrayHistorial;
  }

  
  transformarArray(arrayViajes:ViajesEquipos[]):infoTablasViajesEquipos[]{
    let arrayPrueba:infoTablasViajesEquipos[]=[];
    let itemPrueba:infoTablasViajesEquipos;
    arrayViajes.forEach(item=>{
      itemPrueba={
        id:item.id,
        lastStatusTravel:item.lastStatusTravel,
        operationDate:item.travelEquipmentDTOs[item.travelEquipmentDTOs.length -1].operationDate ,
        observations:item.travelEquipmentDTOs[item.travelEquipmentDTOs.length -1].observation,
        cadeteId:item.travelEquipmentDTOs[item.travelEquipmentDTOs.length -1].cadete?.id,
        cadetefullName:item.travelEquipmentDTOs[item.travelEquipmentDTOs.length -1].cadete?.fullName,
        cadeteEmail:item.travelEquipmentDTOs[item.travelEquipmentDTOs.length -1].cadete?.email,
        cadeteCellPhone:item.travelEquipmentDTOs[item.travelEquipmentDTOs.length -1].cadete?.cellPhone,
        cadeteAddress:item.travelEquipmentDTOs[item.travelEquipmentDTOs.length -1].cadete?.address,
       
        equipmentId:item.travelEquipmentDTOs[item.travelEquipmentDTOs.length -1].equipment.id,
        equipmentMarca:item.travelEquipmentDTOs[item.travelEquipmentDTOs.length -1].equipment.mark,
        equipmentModelo:item.travelEquipmentDTOs[item.travelEquipmentDTOs.length -1].equipment.model,
        equipmentFalla:item.travelEquipmentDTOs[item.travelEquipmentDTOs.length -1].equipment.failure,
        clienteId:item.travelEquipmentDTOs[item.travelEquipmentDTOs.length -1].equipment.clientId,
        clienteFullName:item.travelEquipmentDTOs[item.travelEquipmentDTOs.length -1].equipment.cliente.fullName,
        clienteEmail:item.travelEquipmentDTOs[item.travelEquipmentDTOs.length -1].equipment.cliente.email,
        clienteDireccion:item.travelEquipmentDTOs[item.travelEquipmentDTOs.length -1].equipment.cliente.address,
        clienteCellPhone:item.travelEquipmentDTOs[item.travelEquipmentDTOs.length -1].equipment.cliente.cellPhone
      }
      arrayPrueba.push(itemPrueba);
    })
    return arrayPrueba;
  }
}
