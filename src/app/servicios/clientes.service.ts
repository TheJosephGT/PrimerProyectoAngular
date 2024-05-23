import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private clientes: Cliente[] = [
    {
      clienteId: 1,
      name: 'John',
      lastName: 'Doe',
      cedula: '123456789',
      birthDate: new Date(),
      createAt: new Date(),
      email: 'John@gmail.com',
      active: true,
      addresses: [],
    },
    {
      clienteId: 2,
      name: 'Jane',
      lastName: 'Doe',
      cedula: '987654321',
      birthDate: new Date(),
      createAt: new Date(),
      email: 'Jane@gmail.com',
      active: true,
      addresses: [],
    },
    {
      clienteId: 3,
      name: 'Alice',
      lastName: 'Smith',
      cedula: '456789123',
      birthDate: new Date(),
      createAt: new Date(),
      email: 'alice@example.com',
      active: true,
      addresses: [],
    },
    {
      clienteId: 4,
      name: 'Bob',
      lastName: 'Johnson',
      cedula: '789123456',
      birthDate: new Date(),
      createAt: new Date(),
      email: 'bob@example.com',
      active: false,
      addresses: [],
    },
    {
      clienteId: 5,
      name: 'Michael',
      lastName: 'Brown',
      cedula: '159357486',
      birthDate: new Date(),
      createAt: new Date(),
      email: 'michael@example.com',
      active: false,
      addresses: [],
    },
  ];

  constructor() {}

  getClientes(): Observable<Cliente[]> {
    return of(this.clientes);
  }

  getClienteById(clienteId: number): Observable<Cliente | undefined> {
    const cliente = this.clientes.find(
      (cliente) => cliente.clienteId === clienteId
    );
    return of(cliente);
  }

  postCliente() {}

  updateClienteActivo(clienteId: number, nuevoEstado: boolean) {
    const cliente = this.clientes.find(
      (cliente) => cliente.clienteId === clienteId
    );
    if (cliente) {
      cliente.active = nuevoEstado;
      console.log('Cliente actualizado:', cliente);
    }
  }
}
