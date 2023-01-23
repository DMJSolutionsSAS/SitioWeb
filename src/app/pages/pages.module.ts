import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';


@NgModule({
  declarations: [
    TemplateComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class PagesModule { }
