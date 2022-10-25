import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from 'src/app/model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private url:String="https://portfoliopaganopatricio.herokuapp.com/proyecto/"

  $modalAddProject = new EventEmitter<any>();
  $modalEditProject = new EventEmitter<any>();

  constructor(private http:HttpClient) { }

  getProyectos():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.url+"ver/proyectos");
  }

  public listProject():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.url+"get/proyectos")
  }

  public detailProject(id:number): Observable<Proyecto>{
    return this.http.get<Proyecto>(this.url+`get/${id}`)
  }

  public saveProject(proyecto: Proyecto): Observable<any>{
    return this.http.post<any>(this.url+"create", proyecto)
  }

  public updateProject(id:number, proyecto: Proyecto): Observable<any>{
    return this.http.put<any>(this.url+`update/${id}`,proyecto)
  }

  public deleteProject(id:number): Observable<any>{
    return this.http.delete<any>(this.url+`remove/${id}`)
  }


}
