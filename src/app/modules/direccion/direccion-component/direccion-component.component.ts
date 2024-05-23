import { Observable, of } from 'rxjs';
import { Component } from '@angular/core';
import { Direccion } from '../../../models/direccion';
import { CommonModule } from '@angular/common';
import { DireccionService } from '../../../servicios/direccion.service';

@Component({
  selector: 'app-direccion-component',
  standalone: false,
  templateUrl: './direccion-component.component.html',
  styleUrl: './direccion-component.component.css',
})
export class DireccionComponentComponent {
  listaDirecciones: Observable<Direccion[]>;

  constructor(private _servicio: DireccionService) {}

  ngOnInit() {
    this.listaDirecciones = this._servicio.getDirecciones();
  }

  cambiarEstadoActivo(addressId: number, nuevoEstado: boolean) {
    this._servicio.updateDireccionActiva(addressId, nuevoEstado);
  }
}
