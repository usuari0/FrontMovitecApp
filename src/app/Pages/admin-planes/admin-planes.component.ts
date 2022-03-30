import { Component, OnInit } from '@angular/core';
import { PlanesService } from 'src/app/Services/planes.service';
import { Plan } from 'src/app/Models/plan.model';

@Component({
  selector: 'app-admin-planes',
  templateUrl: './admin-planes.component.html',
  styleUrls: ['./admin-planes.component.css']
})
export class AdminPlanesComponent implements OnInit {

  planes:Plan[] = [];

  constructor(private planesService:PlanesService) { }

  ngOnInit(): void {
    this.planesService.getAllPlanes().subscribe(data=>{
      this.planes = data;
    });
  }

}
