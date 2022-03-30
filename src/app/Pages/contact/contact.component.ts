import { Component, OnInit } from '@angular/core';
import { PostContactDTO } from '../../Models/contact.model';
import { ContactoService } from 'src/app/Services/contacto.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacto : PostContactDTO = {
    nombre : "",
    apellidos : "",
    documento :"DNI",
    numero_documento : "",
    correo :"",
    telefono :"",
    mensaje :""
  };

  flagRespuesta:boolean=false;
  flagCheck:boolean=true;

  flagDataPersonal:boolean = false;

  constructor(
    private contactoService : ContactoService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.contactoService.create(this.contacto).subscribe(data => {
      this.enviarContacto(true);
    },error => {
      this.enviarContacto(false);
    });
  }

  async enviarContacto(check:boolean){
    if (check){
      this.contacto.nombre="";this.contacto.apellidos="";this.contacto.documento="DNI";this.contacto.numero_documento="";this.contacto.telefono="";this.contacto.mensaje="";this.contacto.correo="";
    }
    this.flagCheck = check;
    this.flagRespuesta = true;
    await new Promise(f => setTimeout(f, 2000));
    this.flagRespuesta = false;
  }
}
