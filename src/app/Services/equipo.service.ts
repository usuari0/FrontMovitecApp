import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipo } from '../Models/equipo.model';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(private http:HttpClient) { }

  getAllEquipos(){
    return this.http.get<Equipo[]>("http://localhost:8080/api/equipos");
  }
}
