import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Plan } from 'src/app/Models/plan.model';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  constructor(
    private http:HttpClient
  ) { }

  getAllPlanes(){
    return this.http.get<Plan[]>("http://localhost:8080/api/planes");
  }
}
