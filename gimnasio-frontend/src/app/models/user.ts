export interface User {
    id:number;
    email:string;
    password:string;
    telefono:string;
    ciudad:string;
    codigoPostal:string;
    direccion:string;
    saldo:number;
    tipo:string;
    activo:boolean;
    pagos: any[];
    reservas: any[];
}