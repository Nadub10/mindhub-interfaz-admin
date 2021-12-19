import { Component, OnInit, ViewChild } from '@angular/core';
import { TraerUsuariosService } from '../../services/traer-usuarios.service';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/shared/interfaces/usuario';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DialogServiceService } from '../../services/dialog-service.service';
import { SelectUsuarioService } from '../../services/select-usuario.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.scss']
})
export class TablaUsuariosComponent implements OnInit {

  constructor(private traerUsuarios:TraerUsuariosService,
    public dialogService:DialogServiceService,
    private selectUsuarios:SelectUsuarioService) { }
  loading:boolean=true;
  ngOnInit(): void {
    this.traerUsuarios.traerUsuarios(this.selectUsuarios.tipoUsuario)
    this.traerUsuarios.getArrayUsuarios().subscribe(
      resp=>{
        this.dataSource= new MatTableDataSource(resp);
        this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.loading=false;
      }
    )
  }
  displayedColumns: string[] = ['fullName', 'rol.id', 'address','cellPhone','email','vehicle.name','acciones'];
  dataSource!: MatTableDataSource<Usuario>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  rolMap: any = {
    '1': 'Administrador', '2': 'Cadete', '3': 'Cliente'
  };

}
