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
  postUser(user:Usuario):Observable<Usuario>{
    return this.httpClient.post<Usuario>(`/api/Users`,user)
  }
}
