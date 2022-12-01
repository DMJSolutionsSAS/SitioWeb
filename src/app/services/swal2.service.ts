import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class Swal2Service {

  constructor() { }

  successSwal(title:string, text:string){
    Swal.fire( { icon : 'success', title: title, text: text, timer: 4000 } );
  }

  errorSwal(title:string, text:string){
    Swal.fire( { icon : 'error', title: title, text: text, timer: 4000 } );
  }

  warningSwal(title:string, text:string){
    Swal.fire( { icon : 'warning', title: title, text: text, timer: 4000 } );
  }

  personalizedSwal(title:string){
    Swal.fire( { icon : 'success', title: title, timer: 4000 } );
  }

}
