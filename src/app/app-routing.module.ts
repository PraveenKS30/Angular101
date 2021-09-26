import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'elements', 
    loadChildren: ()=> import('./elements/elements.module').then(m => m.ElementsModule) 
  },
  {
    path: 'collections',
    loadChildren :() => import('./collections/collections.module').then(m=>m.CollectionsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
