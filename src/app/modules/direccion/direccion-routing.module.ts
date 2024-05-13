import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { DireccionComponentComponent } from './direccion-component/direccion-component.component';

const routes: Routes = [
  {
    path: 'direccion',
    component: DireccionComponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DireccionRoutingModule {}
