import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientesComponentComponent } from './clientes-component/clientes-component.component';
import { DireccionComponentComponent } from './direccion-component/direccion-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ClientesComponentComponent,
    DireccionComponentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'PrimerProyectoAngular';
}
