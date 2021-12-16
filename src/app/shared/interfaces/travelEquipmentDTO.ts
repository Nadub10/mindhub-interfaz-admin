import { Operator } from './operator';
import { Equipment } from './equipment';

export interface travelEquipmentDTO{
    id: number,
    operationDate: string,
    observation?: string,
    cadete?: Operator,
    operator: Operator, 
    equipment: Equipment,
    statusTravel: number
}