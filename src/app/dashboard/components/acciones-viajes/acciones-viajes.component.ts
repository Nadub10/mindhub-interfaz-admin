import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ViajesEquipos } from 'src/app/shared/interfaces/viajesEquipos';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';

interface statusTravel {
  value: string;
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
  estadoViaje:string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {item:ViajesEquipos,boton:string}) {
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
    {value: '1', viewValue: 'Pendiente a retirar'},
    {value: '2', viewValue: 'Retiro asignado'},
    {value: '3', viewValue: 'Retirado'},
    {value: '4', viewValue: 'Pendiente de reparación'},
    {value: '5', viewValue: 'Reparado'},
    {value: '6', viewValue: 'Entrega asignada'},
    {value: '7', viewValue: 'Pendiente de entrega'},
    {value: '8', viewValue: 'Entregado'},
    {value: '9', viewValue: 'Recibido'},
    {value: '10', viewValue: 'Renunciar Viaje'},
  ];
  updateForm = new FormGroup({
    estadoViaje: new FormControl('',
      [Validators.required,])
    ,
      
      idCadete: new FormControl(''),
      
      observaciones: new FormControl(''),
    });

    submitForm(formDirective:FormGroupDirective){
      console.log(this.updateForm.value)
    }
}
