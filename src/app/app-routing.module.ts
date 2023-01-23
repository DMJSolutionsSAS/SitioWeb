import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './nopage/not-found/not-found.component';
import { TemplateComponent } from './pages/template/template.component';

const routes: Routes = [
  { path: '', component: TemplateComponent, pathMatch : 'full' },
  { path: '**', pathMatch: 'full',component: NotFoundComponent }
    	
];

@NgModule({
  imports: [RouterModule.forRoot(routes )],//{useHash : true}
  exports: [RouterModule]
})
export class AppRoutingModule { }
