import { Component } from '@angular/core';
import { Direccion } from '../../../models/direccion';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-direccion-detail-individual',
  standalone: false,
  templateUrl: './direccion-detail-individual.component.html',
  styleUrl: './direccion-detail-individual.component.css',
})
export class DireccionDetailIndividualComponent {
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

  direccion: Direccion = new Direccion();

  constructor(private routeManager: ActivatedRoute) {
    this.routeManager.params.subscribe((params) => {
      if (params['id']) {
        this.direccion = this.direcciones.find(
          (direccion) => direccion.addressId == params['id']
        );
      }
    });
  }
}
