import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { UsuarioListDto, UsuarioNuevo } from 'src/app/Models/usuario.model';
import { AuthService } from 'src/app/Services/auth.service';
import { throttleTime } from 'rxjs';
import { InstalacionesService } from 'src/app/Services/instalaciones.service';
import { InstalacionDTO } from 'src/app/Models/instalacion.model';
import { NotificacionService } from 'src/app/Services/notificacion.service';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.css']
})
export class AdminUsuariosComponent implements OnInit {

  modalTitle:string = "";
  usuarios:UsuarioListDto[] = [];
  instalaciones:InstalacionDTO[] = [];
  modalNuevoActive:boolean=false;
  modalEditarActive:boolean=false;
  modalDetalleActive:boolean=false;
  nuevoUsuario:UsuarioNuevo = {
    nombre : "",
    apellidos : "",
    direccion : "",
    tipoDocumento : {
        id :  1
    },
    documento : "",
    estado : true,
    nombreUsuario : "",
    email : "",
    telefono : "",
    password :  "", 
    roles : ["user"]
  }
  editUsuario:UsuarioNuevo = {
    id : 0,
    nombre : "",
    apellidos : "",
    direccion : "",
    tipoDocumento : {
        id :  1
    },
    documento : "",
    estado : true,
    nombreUsuario : "",
    email : "",
    telefono : "",
    password :  "", 
    roles : ["user"]
  }

  constructor(
    private usuarioService:UsuarioService,
    private authService:AuthService,
    private instalacionesService:InstalacionesService,
    private notificacionService:NotificacionService) { }

  ngOnInit(): void {
    this.usuarioService.getAllUsuario().subscribe(data=>{
      this.usuarios = data;
    });
  }

  deleteUser(id:number){
    this.usuarioService.deleteById(id);
    this.cargarUsuarios();
  }

  cargarUsuarios(){
    setTimeout(
      ()=>{
        this.usuarioService.getAllUsuario().subscribe(data=>{
          this.usuarios = data;
        });
       } , 20
   );
  }

  salirModal(){
    this.modalNuevoActive = false;
    this.modalEditarActive = false;
    this.modalDetalleActive = false;
  }

  nuevoModal(){
    this.modalNuevoActive = true;
  }

  enviarNuevoUsuario(){
    this.authService.nuevo(this.nuevoUsuario).subscribe(data=>{
      this.modalNuevoActive = false;
      this.cargarUsuarios();
      this.nuevoUsuario={
        nombre : "",
        apellidos : "",
        direccion : "",
        tipoDocumento : {
            id :  1
        },
        documento : "",
        estado : true,
        nombreUsuario : "",
        email : "",
        telefono : "",
        password :  "", 
        roles : ["user"]
      }
    },err=>{
    });
  }

  editarModal(index:number){
    this.modalEditarActive = true;
    this.editUsuario = {
      id : this.usuarios[index].id,
      nombre : this.usuarios[index].nombre,
      apellidos : this.usuarios[index].apellidos,
      direccion : this.usuarios[index].direccion,
      tipoDocumento : {
          id :  this.usuarios[index].tipo==="DNI"?1:2
      },
      documento : this.usuarios[index].documento,
      estado : this.usuarios[index].estado,
      nombreUsuario : this.usuarios[index].nombre_Usuario,
      email : this.usuarios[index].correo,
      telefono : this.usuarios[index].telefono,
      password : "",
      roles : ["user"]
    }
  }

  editarUsuario(){
    this.authService.editar(this.editUsuario).subscribe(data=>{
      this.modalEditarActive = false;
      this.cargarUsuarios();
    });
  }

  detailUser(index:number){
    this.modalDetalleActive = true;
    this.instalacionesService.getAllByClienteId(this.usuarios[index].id).subscribe(data=>{
      this.instalaciones = data;
    });
  }

  enviarCorreo(){
    this.notificacionService.enviarCorreo().subscribe(data=>{
      console.log(data?"Se notificó correctamente a los clientes":"Lo siento, ocurrió un error");
    });
  }
}
