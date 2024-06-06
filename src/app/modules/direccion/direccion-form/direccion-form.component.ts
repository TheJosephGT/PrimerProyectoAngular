import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClientesService } from '../../../servicios/clientes.service';
import { Cliente } from '../../../models/cliente';
import { DireccionService } from '../../../servicios/direccion.service';
import { Direccion } from '../../../models/direccion';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-direccion-form',
  standalone: false,
  templateUrl: './direccion-form.component.html',
  styleUrl: './direccion-form.component.css',
})
export class DireccionFormComponent {
  formulario: FormGroup;
  clientes: Cliente[];
  direccion: Direccion;
  toaster = inject(ToastrService);

  constructor(
    private form: FormBuilder,
    private _servicioCliente: ClientesService,
    private _servicioDireccion: DireccionService,
    private routeManager: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.formulario = this.form.group({
      alias: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      country: ['', Validators.required],
      active: [true, Validators.required],
      createAt: [new Date(), Validators.required],
      clienteId: [0, Validators.required],
    });

    this.routeManager.params.subscribe((params) => {
      if (params['id']) {
        this._servicioDireccion.getDireccionById(+params['id']).subscribe({
          next: (value) => {
            this.formulario.patchValue(value);
          },
          error: (error) => {
            console.log('Error al obtener la direccion', error);
          },
        });
      }
    });

    this.getClientes();
  }

  getClientes() {
    this._servicioCliente.getClientes().subscribe({
      next: (value) => {
        this.clientes = value;
      },
      error: (error) => {
        console.error('Error al obtener los clientes: ', error);
      },
    });
  }

  guardar() {
    this.formulario.markAllAsTouched();
    console.info('Valor del formulario: ', this.formulario.value);
    console.info('Validez del formulario: ', this.formulario.valid);
    if (this.formulario.valid) {
      this.toaster.success('Direccion guardado con exito');

      this.direccion = this.formulario.value;

      if (this.direccion.addressId == 0) {
        this._servicioDireccion.postDireccion(this.formulario.value).subscribe({
          next: (value) => {
            console.info('Direccion guardado con exito', value);
          },
          error: (error) => {
            console.error('Error al guardar la direccion', error);
          },
        });
      } else {
        this._servicioDireccion.editDireccion(this.formulario.value).subscribe({
          next: (value) => {
            console.info('Direccion actualizado con exito', value);
          },
          error: (error) => {
            console.error('Error al actualizar la direccion', error);
          },
        });
      }

      this.router.navigate(['/direcciones']);
    }
  }

  public getError(controlName: string, name: string) {
    if (
      this.formulario.get(controlName) != null &&
      this.formulario.get(controlName).touched &&
      this.formulario.get(controlName).invalid
    ) {
      if (this.formulario.get(controlName).hasError('required')) {
        return `El campo ${name} es obligatorio`;
      }
    }

    return '';
  }
}
