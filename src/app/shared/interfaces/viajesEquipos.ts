import { travelEquipmentDTO } from './travelEquipmentDTO';

export interface ViajesEquipos{
    id: number,
    creationDate: string,
    lastStatusTravel: number,
    travelEquipmentDTOs: travelEquipmentDTO[],
}