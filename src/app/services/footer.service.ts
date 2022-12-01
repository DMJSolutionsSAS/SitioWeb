import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FooterI } from '../interfaces/interfaz.interface';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  public _footer: FooterI [] = [];
  public anio : string = '';
  public empresa : string = '';

  constructor(private http: HttpClient) { this.mostrarFooter(); }

  private mostrarFooter() {
    this.http.get<FooterI[]>('assets/data/footer.json').subscribe( (res) => {
      this._footer = res;
      res.filter( (f) => { this.anio = f.anio;  this.empresa = f.empresa; });
   });
  }

}
