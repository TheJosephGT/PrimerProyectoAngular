import { Component } from '@angular/core';
import { Direccion } from '../../../models/direccion';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DireccionService } from '../../../servicios/direccion.service';

@Component({
  selector: 'app-direccion-detail-individual',
  standalone: false,
  templateUrl: './direccion-detail-individual.component.html',
  styleUrl: './direccion-detail-individual.component.css',
})
export class DireccionDetailIndividualComponent {
  direccion: Direccion;

  constructor(
    private routeManager: ActivatedRoute,
    private _servicio: DireccionService
  ) {}

  ngOnInit() {
    this.routeManager.params.subscribe((params) => {
      if (params['id']) {
        this._servicio.getDireccionById(+params['id']).subscribe({
          next: (value) => {
            this.direccion = value;
          },
          error: (error) => {
            console.log('Error al obtener la direccion', error);
          },
        });
      }
    });
  }
}
