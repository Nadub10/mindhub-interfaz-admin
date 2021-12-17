import { ViajesEquipos } from "src/app/shared/interfaces/viajesEquipos";
import { Usuario } from 'src/app/shared/interfaces/usuario';


export function sort(a:ViajesEquipos,b:ViajesEquipos){
    return Date.parse(a.travelEquipmentDTOs[a.travelEquipmentDTOs.length-1].operationDate) - Date.parse(b.travelEquipmentDTOs[b.travelEquipmentDTOs.length-1].operationDate);
}
export function filtrar(a:ViajesEquipos, idCadete:number) {
        return a.travelEquipmentDTOs[a.travelEquipmentDTOs.length -1].cadete?.id === idCadete;
}
export function sortInverso(a:ViajesEquipos,b:ViajesEquipos){
    return Date.parse(b.travelEquipmentDTOs[b.travelEquipmentDTOs.length-1].operationDate) - Date.parse(a.travelEquipmentDTOs[a.travelEquipmentDTOs.length-1].operationDate);
}
export function sortId(a:Usuario,b:Usuario){
    return a.id - b.id;
}

export function filtrarTipoUser(a:Usuario, idUsuario:number) {
    return a.rol.id===idUsuario
}