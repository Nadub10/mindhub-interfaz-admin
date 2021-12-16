import { Operator } from './operator';

export interface Equipment{
    id: number,
    mark: string,
    model: string,
    failure: string,
    clientId: number,
    cliente: Operator,
}