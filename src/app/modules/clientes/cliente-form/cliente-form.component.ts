import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cliente-form',
  standalone: false,
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.css',
})
export class ClienteFormComponent {
  formulario: FormGroup;
  toaster = inject(ToastrService);

  constructor(private form: FormBuilder) {}

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
      createAt: [new Date(), Validators.required],
      email: ['', [Validators.required, Validators.email]],
      active: [true, Validators.required],
    });
  }

  guardar() {
    this.formulario.markAllAsTouched();
    console.info('Valor del formulario: ', this.formulario.value);
    console.info('Validez del formulario: ', this.formulario.valid);
    if (this.formulario.valid) {
      this.toaster.success('Cliente guardado con exito');
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
