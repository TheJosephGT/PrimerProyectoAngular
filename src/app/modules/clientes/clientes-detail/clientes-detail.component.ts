import { Component } from '@angular/core';
import { Cliente } from '../../../models/cliente';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes-detail',
  standalone: false,
  templateUrl: './clientes-detail.component.html',
  styleUrl: './clientes-detail.component.css',
})
export class ClientesDetailComponent {
  clientes: Cliente[] = [
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

  cliente: Cliente = new Cliente();

  constructor(private routeManager: ActivatedRoute) {
    this.routeManager.params.subscribe((params) => {
      if (params['id']) {
        this.cliente = this.clientes.find(
          (cliente) => cliente.clienteId == params['id']
        );
      }
    });
  }
}