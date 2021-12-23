import { Component, OnInit, ViewChild } from '@angular/core';
import { TraerViajesService } from '../../services/traer-viajes.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ViajesEquipos } from 'src/app/shared/interfaces/viajesEquipos';
import { infoTablasViajesEquipos } from 'src/app/shared/interfaces/infoTablasViajesEquipos';
import { DialogServiceService } from '../../services/dialog-service.service';

@Component({
  selector: 'app-tabla-historial',
  templateUrl: './tabla-historial.component.html',
  styleUrls: ['./tabla-historial.component.scss']
})
export class TablaHistorialComponent implements OnInit {
  loading:boolean=true;
  displayedColumns: string[] = ['cadetefullName', 'clienteFullName', 'operationDate.fecha','operationDate.hora','lastStatusTravel','acciones'];
  dataSource!: MatTableDataSource<infoTablasViajesEquipos>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private traerViajes:TraerViajesService,
    public dialogService:DialogServiceService) { }
  

  ngOnInit(): void {
    this.traerViajes.setStatusTravel('historial',9);
    this.traerViajes.traerViajes();
    this.traerViajes.getArrayHistorial().subscribe(
      resp=>{
        
        this.dataSource= new MatTableDataSource(resp);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      
      this.loading=false;
      }
    ) 
    
    
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  statusTravelMap: any = {
    '1': 'Pendiente a retirar', '2': 'Retiro asignado', '3': 'Retirado','4':'Pendiente de reparación',
    '5':'Reparado', '6':'Entrega asignada', '7':'Pendiente de entrega','8':'Entregado','9':'Recibido'
  };

}
