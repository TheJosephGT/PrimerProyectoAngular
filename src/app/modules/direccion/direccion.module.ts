import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DireccionRoutingModule } from './direccion-routing.module';
import { DireccionComponentComponent } from './direccion-component/direccion-component.component';

@NgModule({
  declarations: [DireccionComponentComponent],
  imports: [CommonModule, DireccionRoutingModule],
})
export class DireccionModule {}
