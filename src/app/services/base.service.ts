import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  public apiBack = environment.apiBackend;

  constructor() { }

  getUrl(){
    return this.apiBack;
  }
}
