import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ViajesEquipos } from 'src/app/shared/interfaces/viajesEquipos';


@Injectable({
  providedIn: 'root'
})
export class GetTravelsService {

  constructor(private httpClient:HttpClient) { }

  //traigo todos los equipos con x status travel
  getTravels(statusTravel:number):Observable<ViajesEquipos[]>{
    return this.httpClient.get<ViajesEquipos[]>(`/api/Travel/1/${statusTravel}`);
  }

}
