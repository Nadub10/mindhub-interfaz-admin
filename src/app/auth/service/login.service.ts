import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/shared/interfaces/usuario';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  loginUsuario(email:string, password:string):Observable<Usuario>{
    return this.http.get<Usuario>(`/api/Login?email=${email}&password=${password}`);

  }
}
