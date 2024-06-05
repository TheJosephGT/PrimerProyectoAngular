import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DireccionComponentComponent } from './direccion-component/direccion-component.component';
import { DireccionDetailIndividualComponent } from './direccion-detail-individual/direccion-detail-individual.component';
import { DireccionFormComponent } from './direccion-form/direccion-form.component';

const routes: Routes = [
  {
    path: '',
    component: DireccionComponentComponent,
  },
  {
    path: 'formulario-direccion',
    component: DireccionFormComponent,
  },
  {
    path: 'direcciones-detalle/:id',
    component: DireccionDetailIndividualComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DireccionRoutingModule {}
