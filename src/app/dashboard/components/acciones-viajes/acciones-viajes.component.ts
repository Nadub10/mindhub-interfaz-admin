import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ViajesEquipos } from 'src/app/shared/interfaces/viajesEquipos';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { UpdateTravel } from '../../../shared/interfaces/update-travel';
import { AccederLocalStorageService } from '../../services/acceder-local-storage.service';
import { CambiarStatusTravelService } from '../../services/cambiar-status-travel.service';

interface statusTravel {
  value: number;
  viewValue: string;
}
@Component({
  selector: 'app-acciones-viajes',
  templateUrl: './acciones-viajes.component.html',
  styleUrls: ['./acciones-viajes.component.scss']
})
export class AccionesViajesComponent implements OnInit {

  infoViaje:ViajesEquipos;
  boton:string;
  estadoViaje:number;
  estadoRenuncia:number=1;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {item:ViajesEquipos,boton:string},
    private accederLocalStorage:AccederLocalStorageService,
    private cambiarStatusTravel:CambiarStatusTravelService) {
      this.infoViaje=data.item;
      this.boton=data.boton
      this.estadoViaje = this.statusTravelArray[0].value;
     }

  ngOnInit(): void {
  }
  statusTravelMap: any = {
    '1': 'Pendiente a retirar', '2': 'Retiro asignado', '3': 'Retirado','4':'Pendiente de reparación',
    '5':'Reparado', '6':'Entrega asignada', '7':'Pendiente de entrega','8':'Entregado','9':'Recibido'
  };
  statusTravelArray:statusTravel[]= [
    {value: 1, viewValue: 'Pendiente a retirar'},
    {value: 2, viewValue: 'Retiro asignado'},
    {value: 3, viewValue: 'Retirado'},
    {value: 4, viewValue: 'Pendiente de reparación'},
    {value: 5, viewValue: 'Reparado'},
    {value: 6, viewValue: 'Entrega asignada'},
    {value: 7, viewValue: 'Pendiente de entrega'},
    {value: 8, viewValue: 'Entregado'},
    {value: 9, viewValue: 'Recibido'},
    {value: 10, viewValue: 'Renunciar Viaje'},
  ];
  updateForm = new FormGroup({
    estadoViaje: new FormControl('',
      [Validators.required,])
    ,
      
      idCadete: new FormControl(''),
      
      observaciones: new FormControl(''),
    });

    submitForm(formDirective:FormGroupDirective){
      //console.log(this.updateForm.value)
      let viajeModificado:UpdateTravel = this.crearObjetoUpdateTravel();
      console.log(viajeModificado)
      this.cambiarStatusTravel.setObjetoModificarViaje(viajeModificado);
      this.cambiarStatusTravel.modificarViaje();
      formDirective.resetForm();
      
      this.updateForm.reset();
    }

    viajeModificado!:UpdateTravel;
    crearObjetoUpdateTravel():UpdateTravel{
      return this.viajeModificado={
        travelId:this.infoViaje.id,
        statusTravel:this.estadoViaje !== 10? this.updateForm.value.estadoViaje :this.estadoRenuncia,
        userOperation:this.accederLocalStorage.idAdmin,
        cadeteId:this.updateForm.value?.idCadete || 0,
        //VER QUE PASA ACA CON LA RENUNCIA
        renuncia:this.updateForm.value.estadoViaje !== 10? false:true,
        observaciones:this.updateForm.value?.observaciones || ''
      }
    }
}
