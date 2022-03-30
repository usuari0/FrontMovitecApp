import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioListDto } from '../Models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  getAllUsuario(){
    return this.http.get<UsuarioListDto[]>("http://localhost:8080/api/usuarios");
  }
}
