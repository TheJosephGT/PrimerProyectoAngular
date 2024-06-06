import { Injectable } from '@angular/core';
import { Direccion } from '../models/direccion';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';

@Injectable({
  providedIn: 'root',
})
export class DireccionService {
  private baseUrl = 'https://report-api.somee.com/api/addresses';

  constructor(private http: HttpClient) {}

  getDirecciones(): Observable<Direccion[]> {
    return this.http.get<Direccion[]>(this.baseUrl).pipe(
      map((response) => response),
      catchError((error) => {
        console.error(error);
        return of([]);
      })
    );
  }

  getDireccionById(addressId: number): Observable<Direccion | undefined> {
    return this.http.get<Direccion>(this.baseUrl + '/' + addressId).pipe(
      map((response) => response),
      catchError((error) => {
        console.error(error);
        return of();
      })
    );
  }

  getDireccionesByClienteId(clienteId: number): Observable<Direccion[]> {
    return this.getDirecciones().pipe(
      map((direcciones) =>
        direcciones.filter((direccion) => direccion.clienteId === clienteId)
      ),
      catchError((error) => {
        console.error(error);
        return of([]);
      })
    );
  }

  editDireccion(
    direccionEditada: Partial<Direccion>
  ): Observable<Direccion | undefined> {
    return this.http.post<Direccion>(this.baseUrl, direccionEditada).pipe(
      map((response) => response),
      catchError((error) => {
        console.error(error);
        return of();
      })
    );
  }

  postDireccion(
    direccion: Partial<Direccion>
  ): Observable<Direccion | undefined> {
    return this.http.post<Direccion>(this.baseUrl, direccion).pipe(
      map((response) => response),
      catchError((error) => {
        console.error(error);
        return of();
      })
    );
  }

  updateDireccionActiva(addressId: number, nuevoEstado: boolean) {
    // const direccion = this.direcciones.find(
    //   (direccion) => direccion.addressId === addressId
    // );
    // if (direccion) {
    //   direccion.active = nuevoEstado;
    //   console.log('Cliente actualizado:', direccion);
    // }
  }
}
