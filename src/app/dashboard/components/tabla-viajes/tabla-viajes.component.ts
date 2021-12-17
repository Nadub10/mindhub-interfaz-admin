import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ViajesEquipos } from 'src/app/shared/interfaces/viajesEquipos';
import { TraerViajesService } from '../../services/traer-viajes.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogServiceService } from '../../services/dialog-service.service';


@Component({
  selector: 'app-tabla-viajes',
  templateUrl: './tabla-viajes.component.html',
  styleUrls: ['./tabla-viajes.component.scss']
})
export class TablaViajesComponent implements OnInit {


  constructor(public traerViajes:TraerViajesService, public dialogService:DialogServiceService) {
    
    
  }
   ngOnInit(): void {
    
    this.traerViajes.getSubject().subscribe(
      resp=>{
        
        this.dataSource= new MatTableDataSource(resp);
        this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.loading=false;
      }
    )
   // this.dataSource.data=this.arrayViajes;
    
    
    
    
  }
  displayedColumns: string[] = ['fullName', 'address', 'lastStatusTravel','acciones'];
  dataSource!: MatTableDataSource<ViajesEquipos>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  

  ngAfterViewInit() {
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  loading:boolean=true;
  
  statusTravelMap: any = {
    '1': 'Pendiente a retirar', '2': 'Retiro asignado', '3': 'Retirado','4':'Pendiente de reparación',
    '5':'Reparado', '6':'Entrega asignada', '7':'Pendiente de entrega','8':'Entregado','9':'Recibido'
  };

 
}


  
  

