import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponentComponent } from './clientes-component/clientes-component.component';
import { ClientesDetailComponent } from './clientes-detail/clientes-detail.component';
import { ClientesDireccionDetailComponent } from './clientes-direccion-detail/clientes-direccion-detail.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';

const routes: Routes = [
  {
    path: '',
    component: ClientesComponentComponent,
  },
  {
    path: 'cliente/:id',
    component: ClientesDetailComponent,
  },
  {
    path: 'formulario-cliente',
    component: ClienteFormComponent,
  },
  {
    path: 'formulario-cliente/:id',
    component: ClienteFormComponent,
  },
  {
    path: 'cliente-direccion/:id',
    component: ClientesDireccionDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesRoutingModule {}
