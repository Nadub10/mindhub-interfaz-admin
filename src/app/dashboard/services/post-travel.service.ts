import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViajesEquipos } from '../../shared/interfaces/viajesEquipos';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostTravelService {

  constructor(private http:HttpClient) { }
  //actualizo el status travel de 1 equipo
  updateTravel(
    travelId:number,
    statusTravel:number,
    userOperation:number,
    cadeteId:number,
    renuncia:boolean,
    observaciones?:string
    ):Observable<ViajesEquipos>{
    return this.http.post<ViajesEquipos>(`/api/Travel?travelId=${travelId}&statusTravel=${statusTravel}&userOperation=${userOperation}&cadeteId=${cadeteId}&isReasigned=${renuncia}&observations=${observaciones}`,
    {
      travelId:travelId,
      statusTravel:statusTravel,
      userOperation:userOperation,
      cadeteId:cadeteId,
      renuncia:renuncia
    })
  }

}
