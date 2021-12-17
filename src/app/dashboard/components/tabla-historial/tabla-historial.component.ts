import { Component, OnInit, ViewChild } from '@angular/core';
import { TraerViajesService } from '../../services/traer-viajes.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ViajesEquipos } from 'src/app/shared/interfaces/viajesEquipos';

@Component({
  selector: 'app-tabla-historial',
  templateUrl: './tabla-historial.component.html',
  styleUrls: ['./tabla-historial.component.scss']
})
export class TablaHistorialComponent implements OnInit {

  constructor(private traerViajes:TraerViajesService) { }
  loading:boolean=true;

  ngOnInit(): void {
    this.traerViajes.setStatusTravel('historial',8,9);
    this.traerViajes.traerViajes();
    this.traerViajes.getArrayHistorial().subscribe(
      resp=>{
        //console.log(resp)
        this.dataSource= new MatTableDataSource(resp);
        this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.loading=false;
      }
    ) 
    
    
  }
  
  ngAfterViewInit() {
    
  }
  displayedColumns: string[] = ['cadete.fullName', 'cliente.fullName', 'operationDate.fecha','operationDate.hora','lastStatusTravel','acciones'];
  dataSource!: MatTableDataSource<ViajesEquipos>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  

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
