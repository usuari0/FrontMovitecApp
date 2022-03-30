import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/Models/equipo.model';
import { EquipoService } from 'src/app/Services/equipo.service';

@Component({
  selector: 'app-admin-equipos',
  templateUrl: './admin-equipos.component.html',
  styleUrls: ['./admin-equipos.component.css']
})
export class AdminEquiposComponent implements OnInit {

  equipos:Equipo[] = [];

  constructor(private equipoService: EquipoService) { }

  ngOnInit(): void {
    this.equipoService.getAllEquipos().subscribe(data=>{
      this.equipos = data;
    });
  }
}
