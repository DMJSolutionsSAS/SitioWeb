import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { SubsI, TokenI, TokenII } from '../interfaces/interfaz.interface';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcribirseService {

  apiGoogle = environment.apiGoogleSubcripcion;
 
  constructor(private http: HttpClient, private fireStore: Firestore) { }

  subcripcion(data:SubsI){
    let url = `${this.apiGoogle}/fcm/send`;
    return this.http.post(url,data);
  }

  saveToken(token : TokenI){
    const tokentRef = collection(this.fireStore, 'apptoken');
    return addDoc(tokentRef, token);
  }

  getToken() : Observable<TokenI[]>{
    const tokenRef = collection(this.fireStore, 'apptoken');
    return collectionData(tokenRef , { idField : 'id'}) as Observable<TokenI[]>;
  }

  deleteToken(token : TokenII){
    const tokenRef = doc(this.fireStore, `apptoken/${token.id}`);
    return deleteDoc(tokenRef);
  }

  




}
