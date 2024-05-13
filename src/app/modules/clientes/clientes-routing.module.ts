import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponentComponent } from './clientes-component/clientes-component.component';

const routes: Routes = [
  {
    path: 'clientes',
    component: ClientesComponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesRoutingModule {}
