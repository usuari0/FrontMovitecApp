import { Component, OnInit } from '@angular/core';
import { Plan } from 'src/app/Models/plan.model';

import { PlanesService } from 'src/app/Services/planes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  planes:Plan[]=[];

  constructor(
    private planService: PlanesService) {
  }

  ngOnInit(): void {
    this.planService.getAllPlanes().subscribe(data => {
      this.planes = data;
    });
  }

}
