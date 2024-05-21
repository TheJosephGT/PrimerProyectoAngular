import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { DireccionComponentComponent } from './direccion-component/direccion-component.component';
import { DireccionDetailIndividualComponent } from './direccion-detail-individual/direccion-detail-individual.component';

const routes: Routes = [
  {
    path: 'direccion',
    component: DireccionComponentComponent,
  },
  {
    path: 'direccion/:id',
    component: DireccionDetailIndividualComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DireccionRoutingModule {}
