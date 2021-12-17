import { Injectable } from '@angular/core';
import { GetUsersService } from './get-users.service';
import { Usuario } from 'src/app/shared/interfaces/usuario';
import { AccederLocalStorageService } from './acceder-local-storage.service';
import { sort, sortId } from './funciones';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraerUsuariosService {

  constructor(private getUsers:GetUsersService,
              private accederLocalStorage:AccederLocalStorageService) { }

  arrayBaseUsuarios:Usuario[]=[];
  arrayFiltrado:Usuario[]=[];
  public arrayUsuarios = new Subject<Usuario[]>();

  traerUsuarios(vista:string){
    this.getUsers.getUsers(this.accederLocalStorage.idAdmin)
    .subscribe(
      resp=>{
        this.arrayBaseUsuarios=[...resp];
        this.arrayBaseUsuarios.sort(sortId);
        if(vista==='clientes'){
          this.arrayFiltrado=this.arrayBaseUsuarios.filter((a) =>a.rol.id===3)
          this.arrayUsuarios.next(this.arrayFiltrado)
        }
        else if(vista==='cadetes'){
          this.arrayFiltrado= this.arrayBaseUsuarios.filter((a) =>a.rol.id===2)
          this.arrayUsuarios.next(this.arrayFiltrado)
        }
        else if(vista==='admin'){
          this.arrayFiltrado=this.arrayBaseUsuarios.filter((a) =>a.rol.id===1)
          this.arrayUsuarios.next(this.arrayFiltrado)
        }
        else{

          this.arrayUsuarios.next(this.arrayBaseUsuarios)
          console.log('estoy en el else wii')
        }
      }
    )
  }

  public getArrayUsuarios(){
    return this.arrayUsuarios;
  }

}
