import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioListDto, UsuarioLoginReturn } from '../Models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  getAllUsuario(){
    return this.http.get<UsuarioListDto[]>("http://localhost:8080/api/usuarios");
  }

  deleteById(id:number){
    this.http.delete("http://localhost:8080/api/usuarios/"+id).subscribe(()=>{});
  }

  setUsuario(usuario:UsuarioLoginReturn){
    window.sessionStorage.removeItem("ulg");
    window.sessionStorage.setItem("ulg",JSON.stringify(usuario));
  }

  removeUsuario(){
    window.sessionStorage.removeItem("ulg");
  }

  getUsuario(){
    return JSON.parse(sessionStorage.getItem("ulg")!);
  }
}
