import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { ContactI, ContactFireI } from '../interfaces/interfaz.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public _contact: ContactI [] = [];

  constructor( private http:HttpClient, private fireStore: Firestore) { this.mostrarHero(); }

  private mostrarHero(){
    this.http.get<ContactI[]>('assets/data/contacto.json').subscribe( (res) => {
      this._contact = res;
    });
  }

  saveContact(contact : ContactFireI){
    const contactRef = collection(this.fireStore, 'contact');
    return addDoc(contactRef , contact);
  }

}
