import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../../model/persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url= "https://pp-portfolio-backend.herokuapp.com/persona/";
  // $modalAddAbout = new EventEmitter<any>();
  $modalEditAbout = new EventEmitter<any>();

  constructor(private http: HttpClient) {}

  public getPersona(): Observable<Persona>{
    return this.http.get<Persona>(this.url+'ver/perfil');
  }

  public detailAboutMe(id:number):Observable<Persona>{
    return this.http.get<Persona>(this.url+`get/${id}`)
  }

  public updateAboutMe(id:number, educacion:Persona):Observable<any>{
    return this.http.put<any>(this.url+`update/${id}`,educacion)
  }
}
