import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DireccionRoutingModule } from './direccion-routing.module';
import { DireccionComponentComponent } from './direccion-component/direccion-component.component';
import { DireccionDetailIndividualComponent } from './direccion-detail-individual/direccion-detail-individual.component';
import { DireccionService } from '../../servicios/direccion.service';
import { DireccionFormComponent } from './direccion-form/direccion-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Cliente } from '../../models/cliente';
import { ClientesService } from '../../servicios/clientes.service';

@NgModule({
  declarations: [
    DireccionComponentComponent,
    DireccionDetailIndividualComponent,
    DireccionFormComponent,
  ],
  imports: [
    CommonModule,
    DireccionRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [DireccionService, ClientesService],
})
export class DireccionModule {}
