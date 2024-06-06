import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Cliente } from '../../../models/cliente';
import { ClientesService } from '../../../servicios/clientes.service';

@Component({
  selector: 'app-cliente-form',
  standalone: false,
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.css',
})
export class ClienteFormComponent {
  formulario: FormGroup;
  toaster = inject(ToastrService);

  constructor(
    private form: FormBuilder,
    private routeManager: ActivatedRoute,
    private _servicio: ClientesService
  ) {}

  ngOnInit() {
    this.formulario = this.form.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      cedula: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
      birthDate: [new Date(), Validators.required],
      createdAt: [new Date(), Validators.required],
      email: ['', [Validators.required, Validators.email]],
      active: [true, Validators.required],
    });

    this.routeManager.params.subscribe((params) => {
      if (params['id']) {
        this._servicio.getClienteById(+params['id']).subscribe({
          next: (value) => {
            this.formulario.patchValue(value);
          },
          error: (error) => {
            console.log('Error al obtener el cliente', error);
          },
        });
      }
    });
  }

  guardar() {
    this.formulario.markAllAsTouched();
    console.info('Valor del formulario: ', this.formulario.value);
    console.info('Validez del formulario: ', this.formulario.valid);
    if (this.formulario.valid) {
      this.toaster.success('Cliente guardado con exito');
    }

    if (this.formulario.value.clienteId === 0) {
      this._servicio.postCliente(this.formulario.value).subscribe({
        next: (value) => {
          console.log('Cliente guardado con exito', value);
        },
        error: (error) => {
          console.error('Error al guardar el cliente', error);
        },
      });
    } else {
      this._servicio.editCliente(this.formulario.value).subscribe({
        next: (value) => {
          console.log('Cliente editado con exito', value);
        },
        error: (error) => {
          console.error('Error al editar el cliente', error);
        },
      });
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
      } else if (this.formulario.get(controlName).hasError('minlength')) {
        return `El campo ${name} debe tener al menos 11 digitos`;
      } else if (this.formulario.get(controlName).hasError('maxlength')) {
        return `El campo ${name} puede tener hasta 11 digitos`;
      }
    }

    return '';
  }
}
