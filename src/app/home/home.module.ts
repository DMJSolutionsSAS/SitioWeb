import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { TemplateComponent } from './pages/template/template.component';
import { HeroComponent } from './pages/hero/hero.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { SwiperComponent } from './pages/swiper/swiper.component';
import { FeaturesComponent } from './pages/features/features.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { MensajeComponent } from './pages/mensaje/mensaje.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { CountsComponent } from './pages/counts/counts.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { TeamComponent } from './pages/team/team.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetallePortafolioComponent } from './pages/detalle-portafolio/detalle-portafolio.component';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';




@NgModule({
  declarations: [
    TemplateComponent,
    HeroComponent,
    NosotrosComponent,
    SwiperComponent,
    FeaturesComponent,
    ServiciosComponent,
    MensajeComponent,
    PortfolioComponent,
    CountsComponent,
    TestimonialsComponent,
    TeamComponent,
    ContactComponent,
    DetallePortafolioComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NgxUsefulSwiperModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module
  ],
  exports: [
    TemplateComponent,
    HeroComponent,
    NosotrosComponent,
    SwiperComponent,
    FeaturesComponent,
    ServiciosComponent,
    MensajeComponent,
    PortfolioComponent,
    CountsComponent,
    TestimonialsComponent,
    TeamComponent,
    DetallePortafolioComponent
  ]
})
export class HomeModule { }
