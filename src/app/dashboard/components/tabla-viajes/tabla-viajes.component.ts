import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ViajesEquipos } from 'src/app/shared/interfaces/viajesEquipos';
import { TraerViajesService } from '../../services/traer-viajes.service';


@Component({
  selector: 'app-tabla-viajes',
  templateUrl: './tabla-viajes.component.html',
  styleUrls: ['./tabla-viajes.component.scss']
})
export class TablaViajesComponent implements OnInit {

  @Input() arrayViajes!:ViajesEquipos[];

  constructor(public traerViajes:TraerViajesService) {
    
    
  }
   ngOnInit(): void {
    
    this.dataSource = this.traerViajes.dataSource;
   // this.dataSource.data=this.arrayViajes;
    this.loading=false;
    
    
    
  }
  displayedColumns: string[] = ['fullName', 'address', 'lastStatusTravel'];
  dataSource!: MatTableDataSource<ViajesEquipos>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  loading:boolean=true;
  
}

  
  

