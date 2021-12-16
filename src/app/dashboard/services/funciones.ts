import { ViajesEquipos } from "src/app/shared/interfaces/viajesEquipos";


export function sort(a:ViajesEquipos,b:ViajesEquipos){
    return Date.parse(a.travelEquipmentDTOs[a.travelEquipmentDTOs.length-1].operationDate) - Date.parse(b.travelEquipmentDTOs[b.travelEquipmentDTOs.length-1].operationDate);
}
export function filtrar(a:ViajesEquipos, idCadete:number) {
        return a.travelEquipmentDTOs[a.travelEquipmentDTOs.length -1].cadete?.id === idCadete;
}
export function sortInverso(a:ViajesEquipos,b:ViajesEquipos){
    return Date.parse(b.travelEquipmentDTOs[b.travelEquipmentDTOs.length-1].operationDate) - Date.parse(a.travelEquipmentDTOs[a.travelEquipmentDTOs.length-1].operationDate);
}