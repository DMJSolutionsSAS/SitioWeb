import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';
import { TokenI } from "../interfaces/interfaz.interface";

@Injectable({
    providedIn: 'root'
})
export class SubsInterceptorService implements HttpInterceptor {
    
    public constructor( ) { }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const miToken : TokenI[] = JSON.parse( localStorage.getItem('miToken')! ) || [];


        if(miToken.length >  0){
            const miAuthoritation = environment.claveServidor;
            
            req = req.clone({
                setHeaders:{ "Authorization":`key=${miAuthoritation}`, "Content-Type":"application/json"} 
            });
        }
        return next.handle(req);
    }
}