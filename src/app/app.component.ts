import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DireccionComponentComponent } from './modules/direccion/direccion-component/direccion-component.component';
import { ClientesModule } from './modules/clientes/clientes.module';
import { RouterModule } from '@angular/router';
import { DireccionModule } from './modules/direccion/direccion.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClientesModule, DireccionModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'PrimerProyectoAngular';
}
