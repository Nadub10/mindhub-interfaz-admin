import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Usuario } from 'src/app/shared/interfaces/usuario';
@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  constructor(private httpClient:HttpClient) { }
  //traigo toda la lista de usuarios
  getUsers(userId:number):Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`/api/Users?userOperation=${userId}`);
  }
}
