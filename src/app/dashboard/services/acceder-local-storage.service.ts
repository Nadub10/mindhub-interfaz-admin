import { Injectable } from '@angular/core';
import { Usuario } from '../../shared/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class AccederLocalStorageService {

  constructor() { }

  objetoAdmin:Usuario=JSON.parse(localStorage.getItem('adminLogged')!);
  idAdmin:number=this.objetoAdmin?.id || 0;
  fullNameAdmin:string=this.objetoAdmin.fullName;
  fin:number=this.fullNameAdmin.indexOf(' ');
  nombreAdmin:string=this.fullNameAdmin.slice(0,this.fin);

}
