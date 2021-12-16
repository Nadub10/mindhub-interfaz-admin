import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Vehicle } from '../../shared/interfaces/vehicle';
import { Rol } from '../../shared/interfaces/rol';
import { Usuario } from '../../shared/interfaces/usuario';
@Injectable({
  providedIn: 'root'
})
export class PostUserService {

  constructor(private httpClient:HttpClient) { }

  //genero nuevos usuarios/modifico usuarios existentes
  postUser(
    id:number,
    fullName:string,
    email:string,
    cellPhone:string,
    address:string,
    password:string,
    isAccepted:boolean,
    isDeleted:boolean,
    vehicle:Vehicle | null,
    rol:Rol,
    observations?:string,
    
    
  ):Observable<Usuario>{
    return this.httpClient.post<Usuario>(`/api/Users`,{
      id:id,
      fullName:fullName,
      email:email,
      cellPhone:cellPhone,
      address:address,
      password:password,
      isAccepted:isAccepted,
      isDeleted:isDeleted,
      observations:observations,
      vehicle:vehicle,
      rol:rol


    })
  }
}
