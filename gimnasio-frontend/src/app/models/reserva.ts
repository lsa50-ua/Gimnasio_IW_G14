import { Socio } from "./socio";

export interface Reserva {
    "id": number,
    "fechaReserva": string,
    "hora": string,
    "socio": Socio
}