import { Component } from '@angular/core';
import { Direccion } from '../../../models/direccion';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes-direccion-detail',
  standalone: false,
  templateUrl: './clientes-direccion-detail.component.html',
  styleUrl: './clientes-direccion-detail.component.css',
})
export class ClientesDireccionDetailComponent {
  direcciones: Direccion[] = [
    {
      addressId: 1,
      alias: 'Home',
      street: 'Toribio camilo',
      city: 'San francisco de macoris',
      state: 'Duarte',
      zipCode: '31000',
      country: 'Dominican Republic',
      active: true,
      createAt: new Date(),
      clienteId: 1,
    },
    {
      addressId: 10,
      alias: 'Prueba',
      street: 'Prueba nueva',
      city: 'San francisco de macoris',
      state: 'Duarte',
      zipCode: '31000',
      country: 'Dominican Republic',
      active: true,
      createAt: new Date(),
      clienteId: 1,
    },
    {
      addressId: 2,
      alias: 'Vacation Home',
      street: 'Calle Principal',
      city: 'Puerto Plata',
      state: 'Puerto Plata',
      zipCode: '57000',
      country: 'Dominican Republic',
      active: false,
      createAt: new Date(),
      clienteId: 2,
    },
    {
      addressId: 3,
      alias: 'Warehouse',
      street: 'Calle Central',
      city: 'La Romana',
      state: 'La Romana',
      zipCode: '22000',
      country: 'Dominican Republic',
      active: true,
      createAt: new Date(),
      clienteId: 3,
    },
    {
      addressId: 4,
      alias: 'Beach House',
      street: 'Calle del Mar',
      city: 'Boca Chica',
      state: 'Santo Domingo',
      zipCode: '11500',
      country: 'Dominican Republic',
      active: true,
      createAt: new Date(),
      clienteId: 5,
    },
    {
      addressId: 5,
      alias: 'Mountain Retreat',
      street: 'Carretera a la Montaña',
      city: 'Jarabacoa',
      state: 'La Vega',
      zipCode: '41000',
      country: 'Dominican Republic',
      active: false,
      createAt: new Date(),
      clienteId: 4,
    },
  ];

  direccionesFiltradas: Direccion[] = [];

  constructor(private routeManager: ActivatedRoute) {
    this.routeManager.params.subscribe((params) => {
      const clienteId = params['id'];
      if (clienteId) {
        this.direccionesFiltradas = this.direcciones.filter(
          (d) => d.clienteId == clienteId
        );
      }
    });
  }
}
