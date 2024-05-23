import { Component } from '@angular/core';
import { Cliente } from '../../../models/cliente';
import { Observable } from 'rxjs';
import { ClientesService } from '../../../servicios/clientes.service';

@Component({
  selector: 'app-clientes-component',
  standalone: false,
  templateUrl: './clientes-component.component.html',
  styleUrl: './clientes-component.component.css',
})
export class ClientesComponentComponent {
  listaClientes: Observable<Cliente[]>;

  constructor(private _servicio: ClientesService) {}

  ngOnInit() {
    this.listaClientes = this._servicio.getClientes();
  }

  cambiarEstadoActivo(clienteId: number, nuevoEstado: boolean): void {
    this._servicio.updateClienteActivo(clienteId, nuevoEstado);
  }
}
