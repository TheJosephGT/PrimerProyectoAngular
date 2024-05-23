import { Component } from '@angular/core';
import { Direccion } from '../../../models/direccion';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { DireccionService } from '../../../servicios/direccion.service';

@Component({
  selector: 'app-clientes-direccion-detail',
  standalone: false,
  templateUrl: './clientes-direccion-detail.component.html',
  styleUrl: './clientes-direccion-detail.component.css',
})
export class ClientesDireccionDetailComponent {
  listaDirecciones: Observable<Direccion[]>;

  constructor(
    private routeManager: ActivatedRoute,
    private _servicio: DireccionService
  ) {}

  // Utilizamos pipe para poder utilizar el operador map y asi convertir en un array el observable.
  ngOnInit() {
    this.routeManager.params.subscribe((params) => {
      const clienteId = params['id'];
      if (clienteId) {
        this.listaDirecciones = this._servicio
          .getDirecciones()
          .pipe(
            map((direcciones: Direccion[]) =>
              direcciones.filter((d) => d.clienteId == clienteId)
            )
          );
      }
    });
  }
}
