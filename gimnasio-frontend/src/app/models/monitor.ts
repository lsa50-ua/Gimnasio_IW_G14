export interface Monitor {
    id:number;
    email:string;
    password:string;
    nombre:string;
    telefono:string;
    ciudad:string;
    codigoPostal:string;
    direccion:string;
    tipo:string;
    activo:boolean;
    actividades: any[];
    numActividades: number;
}