import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponentComponent } from './clientes-component/clientes-component.component';

@NgModule({
  declarations: [ClientesComponentComponent],
  imports: [CommonModule, ClientesRoutingModule],
})
export class ClientesModule {}
