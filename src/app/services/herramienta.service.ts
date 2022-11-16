import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HerramientaI } from '../interfaces/interfaz.interface';

@Injectable({
  providedIn: 'root'
})
export class HerramientaService {

  public _herramientas: HerramientaI [] = [];

  constructor(private http: HttpClient) { 
    this.mostrarHerramientas();
  }

  private mostrarHerramientas(){
    this.http.get<HerramientaI[]>('assets/data/herramientas.json').subscribe( (res) => {
      this._herramientas = res;
    });
  }
}
