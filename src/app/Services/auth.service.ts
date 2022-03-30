import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioLogin, UsuarioLoginReturn, UsuarioNuevo } from '../Models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string = "http://localhost:8080/auth/";

  constructor(
    private http : HttpClient
  ) { }

  nuevo(usuario : UsuarioNuevo){
    return this.http.post<UsuarioNuevo>(this.baseUrl+"nuevo", usuario);
  }

  login(usuario : UsuarioLogin){
    return this.http.post<UsuarioLoginReturn>(this.baseUrl+"login", usuario);
  }
}