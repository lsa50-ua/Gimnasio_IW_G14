import { Socio } from "./socio";

export interface Pago {
  coste: number;
  usuario: Socio;
}

export interface PagoGet {
  id: number;
  fecha: string;
  coste: number;
}