import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private baseUrl = 'https://report-api.somee.com/api/clientes';

  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl).pipe(
      map((response) => response),
      catchError((error) => {
        console.error(error);
        return of([]);
      })
    );
  }

  getClienteById(clienteId: number): Observable<Cliente | undefined> {
    return this.http.get<Cliente>(this.baseUrl + '/' + clienteId).pipe(
      map((response) => response),
      catchError((error) => {
        console.error(error);
        return of();
      })
    );
  }

  editCliente(
    clienteEditado: Partial<Cliente>
  ): Observable<Cliente | undefined> {
    return this.http.post<Cliente>(this.baseUrl, clienteEditado).pipe(
      map((response) => response),
      catchError((error) => {
        console.error(error);
        return of();
      })
    );
  }

  postCliente(cliente: Partial<Cliente>): Observable<Cliente | undefined> {
    return this.http.post<Cliente>(this.baseUrl, cliente).pipe(
      map((response) => response),
      catchError((error) => {
        console.error(error);
        return of();
      })
    );
  }

  updateClienteActivo(clienteId: number, nuevoEstado: boolean) {}
}
