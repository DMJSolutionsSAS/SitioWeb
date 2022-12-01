import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';

import { environment } from '../environments/environment';

import { SubsInterceptorService } from './interceptor/subs-interceptor.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    AppComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireMessagingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    SweetAlert2Module.forRoot()

   
  ],
  providers: [
    { provide:HTTP_INTERCEPTORS, useClass:SubsInterceptorService, multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
