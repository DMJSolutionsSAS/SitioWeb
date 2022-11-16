import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavI } from '../interfaces/interfaz.interface';

@Injectable({
  providedIn: 'root'
})
export class NavService { 

  public _nav: NavI [] = [];

  constructor(private http:HttpClient) {
    this.mostrarNav();
   }

  private mostrarNav(){
    this.http.get<NavI[]>('assets/data/nav.json').subscribe( (res) => {
      this._nav = res;
    });
  }
}
