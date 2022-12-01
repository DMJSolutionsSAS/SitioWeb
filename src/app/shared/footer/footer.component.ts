import { AfterViewInit, Component } from '@angular/core';
import { FooterService } from '../../services/footer.service';

import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { mergeMap, mergeMapTo } from 'rxjs';
import { SubcribirseService } from '../../services/subcribirse.service';
import { SubsI, TokenI, TokenII } from '../../interfaces/interfaz.interface';
import { Swal2Service } from '../../services/swal2.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  implements AfterViewInit {
  token : string = "";
  subscrito :boolean = false;
  name : string = "Suscribirme";

  dataObj!: SubsI;
  tokenCollection! :TokenI;
  tokenCollection2! : TokenII;
  arrayTokenCollection :TokenI[] = [];

  constructor(public _footer: FooterService, 
    private afMessaging: AngularFireMessaging, 
    private _subs: SubcribirseService,
    private _sw2 :Swal2Service,
  ) { 
    this.initNotification();
    this.verToken(); 
    this.listen();    
  }
  
  ngAfterViewInit(): void {
    this.verToken();
    this.listen();
  }

  initNotification(){
    this.dataObj = {
      notification : {
        title : "DMJ SOLUTIONS S.A.S",
        body : "🚀 Gracias por Suscribirte 🌳"
      },
      to:"",
      priority : "high",
      content_available: true 
    }
  }

  get footer(){
    return this._footer._footer;
  }

  requestPermission(){
    this.afMessaging.requestPermission
      .pipe( mergeMapTo( this.afMessaging.tokenChanges ) )
      .subscribe({
          next: ( miToken ) => { 
            console.log( 'mitoken', miToken );

            if ( miToken !== null ) {
              this._sw2.personalizedSwal('Se ha subscrito🚀 a DMJ SOLUTIONS S.A.S 🌳');
              
              this.addTokenFirebase( miToken );

              this.gettterTokenFirebase();

              this.subscrito = true;  this.name = "Suscrito";
            }else {
              this.subscrito = false;  this.name = "Suscribirme";
            }
          },
          error: (e) => console.error(e)
      });
  }

  addTokenFirebase( token:string ) : void {//si
    this.tokenCollection = { token : token };
    this._subs.saveToken(this.tokenCollection);//guarda el token al firebase
  }

  gettterTokenFirebase() : void {//si
    this._subs.getToken().subscribe( ( TokenCollection ) => {

      this.arrayTokenCollection = TokenCollection;
      this.addLocalStorage( JSON.stringify( this.arrayTokenCollection ) ); //guardar al local storage

      const tokenLocal :TokenI[] = JSON.parse( localStorage.getItem('miToken')! ) || [];
      this.subcribirse( tokenLocal );
    });
  }

  addLocalStorage( arrayTokenCollection: string ) : void {//si
    localStorage.setItem( 'miToken', arrayTokenCollection );
  }

  subcribirse( tokenLocal: TokenI[] ) {
    if( tokenLocal.length > 0 ){
      tokenLocal.map( ( m ) => {
        this.dataObj.to = m.token;
        this.send( this.dataObj );  
      });
    }
  }

  send( data:SubsI ){
    this._subs.subcripcion(data).subscribe({
        next:(res) => console.log('envío de datos suscripción: ', res ),
        error:(e) => console.log(e)
    });
  }

  verToken(){
    this.afMessaging.getToken.subscribe({
      next : ( token ) => { 
        const tokenLocal :TokenI[] = JSON.parse( localStorage.getItem('miToken')!) || [];

        if( token !== null && tokenLocal.length > 0){
          this.subscrito = true;
          this.name = "Suscrito"
        }else{
          this.subscrito = false;
          this.name = "Suscribirme";
        }
       },   
      error: (e) => console.error(e)
    });
  }

  deleteToken(){
    this.subscrito = true; 
    this._sw2.personalizedSwal('Su subscripción ha sido eliminada ');

    const getLocal: TokenI[] = JSON.parse( localStorage.getItem('miToken')!) || [];

    if ( getLocal.length > 0 ) {    
      this.afMessaging.getToken.pipe( mergeMap( token => this.afMessaging.deleteToken( getLocal[0].token ) ) )
        .subscribe( ( token ) => { 
          if ( token ) {
            console.log( 'Token deleted!' , token );
            localStorage.removeItem('miToken');
            this. name = "Suscribirme";
          }
        });

        this.tokenCollection2  = { id : getLocal[0].id } 
        this.borrar( this.tokenCollection2 );
        this.subscrito = false; 
      }else{
        this.subscrito = true; 
      }
  }

  async borrar( tokenCollection: TokenII ){
    await this._subs.deleteToken( tokenCollection );
   
  }

  listen() {
    this.afMessaging.messages.subscribe({
      next: (message) => { console.log(message); } 
    });
  }


}
