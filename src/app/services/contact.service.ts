import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactI, NewContact } from '../interfaces/interfaz.interface';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public _contact: ContactI [] = [];

  constructor(
    private http:HttpClient, 
    private bs:BaseService
    ) { this.mostrarHero(); }

  private mostrarHero(){
    this.http.get<ContactI[]>('assets/data/contacto.json').subscribe( (res) => {
      this._contact = res;
    });
  }

  save(data:NewContact){
    let url = this.bs.getUrl() + '/formulario';
    return this.http.post(url,data);
  }

}
