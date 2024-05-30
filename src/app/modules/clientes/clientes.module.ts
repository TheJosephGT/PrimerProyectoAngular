import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponentComponent } from './clientes-component/clientes-component.component';
import { ClientesDetailComponent } from './clientes-detail/clientes-detail.component';
import { ClientesDireccionDetailComponent } from './clientes-direccion-detail/clientes-direccion-detail.component';
import { ClientesService } from '../../servicios/clientes.service';
import { DireccionService } from '../../servicios/direccion.service';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClientesComponentComponent,
    ClientesDetailComponent,
    ClientesDireccionDetailComponent,
    ClienteFormComponent,
  ],
  imports: [CommonModule, ClientesRoutingModule, ReactiveFormsModule],
  providers: [ClientesService, DireccionService],
})
export class ClientesModule {}
