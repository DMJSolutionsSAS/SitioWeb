import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroI } from '../interfaces/interfaz.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  public _hero: HeroI [] = [];

  constructor(private http:HttpClient) { 
    this.mostrarHero();
  }

  private mostrarHero(){
    this.http.get<HeroI[]>('assets/data/hero.json').subscribe( (res) => {
      this._hero = res;
    });
  }
}
