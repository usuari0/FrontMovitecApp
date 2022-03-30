import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../Models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http:HttpClient) { }

  getAllEmpleados(){
    return this.http.get<Empleado[]>("http://localhost:8080/api/empleados");
  }
}
