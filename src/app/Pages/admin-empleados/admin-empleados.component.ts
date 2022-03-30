import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/Models/empleado.model';
import { EmpleadoService } from 'src/app/Services/empleado.service';

@Component({
  selector: 'app-admin-empleados',
  templateUrl: './admin-empleados.component.html',
  styleUrls: ['./admin-empleados.component.css']
})
export class AdminEmpleadosComponent implements OnInit {

  empleados:Empleado[] = [];

  constructor(private empleadoService:EmpleadoService) { }

  ngOnInit(): void {
    this.empleadoService.getAllEmpleados().subscribe(data=>{
      this.empleados = data;
    });
  }

}
