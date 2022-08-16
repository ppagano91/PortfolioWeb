import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from 'src/app/model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private url:String="http://localhost:8080/proyecto/"

  constructor(private http:HttpClient) { }

  getProyectos():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.url+"ver/proyectos");
  }
}
