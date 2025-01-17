import { Actividad } from "./actividad"
import { Monitor } from "./monitor"

export interface Clase {
    "id": 1,
    "nombre": string,
    "diaSemana": string,
    "horas": string,
    "fechaInicio": string,
    "fechaFin": string,
    "capacidad": number,
    "precio": number,
    "tipoActividad": Actividad,
    "monitor": Monitor
}