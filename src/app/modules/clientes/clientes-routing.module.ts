import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponentComponent } from './clientes-component/clientes-component.component';
import { ClientesDetailComponent } from './clientes-detail/clientes-detail.component';
import { ClientesDireccionDetailComponent } from './clientes-direccion-detail/clientes-direccion-detail.component';

const routes: Routes = [
  {
    path: 'clientes',
    component: ClientesComponentComponent,
  },
  {
    path: 'cliente/:id',
    component: ClientesDetailComponent,
  },
  {
    path: 'direcciones/:id',
    component: ClientesDireccionDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesRoutingModule {}
