import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TPV } from '../models/tpv';

@Injectable({
  providedIn: 'root'
})
export class TpvService {
  private url = 'https://api.green-sys.es/sales';
  private token = 'sk_stssncudbqm5u2p5uo'

  constructor(private http:HttpClient) { }

  create(importe: number) {
    const tpv = new TPV(importe)
    return this.http.post(this.url, tpv, {
      headers: {
        'x-api-key': `${this.token}`
      }
    });
  }
}
