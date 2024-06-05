import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-direccion-form',
  standalone: false,
  templateUrl: './direccion-form.component.html',
  styleUrl: './direccion-form.component.css',
})
export class DireccionFormComponent {
  formulario: FormGroup;
  toaster = inject(ToastrService);

  constructor(private form: FormBuilder) {
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
