import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponentComponent } from './clientes-component/clientes-component.component';
import { ClientesDetailComponent } from './clientes-detail/clientes-detail.component';
import { ClientesDireccionDetailComponent } from './clientes-direccion-detail/clientes-direccion-detail.component';

@NgModule({
  declarations: [
    ClientesComponentComponent,
    ClientesDetailComponent,
    ClientesDireccionDetailComponent,
  ],
  imports: [CommonModule, ClientesRoutingModule],
})
export class ClientesModule {}
