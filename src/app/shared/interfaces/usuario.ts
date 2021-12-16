import { Rol } from "./rol";
import { Vehicle } from './vehicle';
export interface Usuario{
    id?:number,
    fullName:string,
    email:string,
    cellPhone:string,
    address:string,
    password:string,
    isAccepted?:boolean,
    isDeleted?:boolean,
    observations?:string,
    vehicle?:Vehicle,
    rol?:Rol
}