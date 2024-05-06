import { Component } from '@angular/core';
import { Direccion } from '../models/direccion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-direccion-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './direccion-component.component.html',
  styleUrl: './direccion-component.component.css',
})
export class DireccionComponentComponent {
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
  ];
}
