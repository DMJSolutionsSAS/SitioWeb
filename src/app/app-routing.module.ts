import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './home/pages/template/template.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { DetallePortafolioComponent } from './home/pages/detalle-portafolio/detalle-portafolio.component';


const routes: Routes = [
  {
    path: '',//ruta principal
    component: TemplateComponent,
    pathMatch: 'full',
  },
  {
    path: 'detalle-portafolio',
    component: DetallePortafolioComponent,
  }, 
  {
    path: 'not-found',
    component: NotFoundComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
