import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobremimComponent } from './sobremim/sobremim.component';

const routes: Routes = [
  {path: 'sb', component: SobremimComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
