import { Component } from '@angular/core';
import { Cliente } from '../../../models/cliente';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../../../servicios/clientes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clientes-detail',
  standalone: false,
  templateUrl: './clientes-detail.component.html',
  styleUrl: './clientes-detail.component.css',
})
export class ClientesDetailComponent {
  cliente: Cliente;

  constructor(
    private routeManager: ActivatedRoute,
    private _servicio: ClientesService
  ) {}

  ngOnInit() {
    this.routeManager.params.subscribe((params) => {
      if (params['id']) {
        this._servicio.getClienteById(+params['id']).subscribe({
          next: (value) => {
            this.cliente = value;
          },
          error: (error) => {
            console.log('Error al obtener el cliente', error);
          },
        });
      }
    });
  }
}
