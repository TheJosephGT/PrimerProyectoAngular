import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DireccionRoutingModule } from './direccion-routing.module';
import { DireccionComponentComponent } from './direccion-component/direccion-component.component';
import { DireccionDetailIndividualComponent } from './direccion-detail-individual/direccion-detail-individual.component';
import { DireccionService } from '../../servicios/direccion.service';

@NgModule({
  declarations: [
    DireccionComponentComponent,
    DireccionDetailIndividualComponent,
  ],
  imports: [CommonModule, DireccionRoutingModule],
  providers: [DireccionService],
})
export class DireccionModule {}
