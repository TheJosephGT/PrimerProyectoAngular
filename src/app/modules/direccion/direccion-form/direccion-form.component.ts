import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClientesService } from '../../../servicios/clientes.service';
import { Cliente } from '../../../models/cliente';

@Component({
  selector: 'app-direccion-form',
  standalone: false,
  templateUrl: './direccion-form.component.html',
  styleUrl: './direccion-form.component.css',
})
export class DireccionFormComponent {
  formulario: FormGroup;
  clientes: Cliente[];
  toaster = inject(ToastrService);

  constructor(
    private form: FormBuilder,
    private _servicioCliente: ClientesService
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
