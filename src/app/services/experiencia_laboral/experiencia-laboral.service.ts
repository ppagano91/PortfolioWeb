import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienciaLaboral } from 'src/app/model/experiencia-laboral';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaLaboralService {
  private url:String="http://localhost:8080/experiencia/";
  $modalAddJob = new EventEmitter<any>();
  $modalEditJob = new EventEmitter<any>();

  constructor(private http: HttpClient) {    
  }

  public getExperiencias(): Observable<ExperienciaLaboral[]>{
    return this.http.get<ExperienciaLaboral[]>(this.url+"ver/trabajos")
  }

  public listExperience(): Observable<ExperienciaLaboral[]>{
    return this.http.get<ExperienciaLaboral[]>(this.url+"ver/experiencialaboral")
  }

  public detailExperience(id:number):Observable<ExperienciaLaboral>{
    return this.http.get<ExperienciaLaboral>(this.url+`ver/${id}`)
  }

  public saveExperience(experiencia:ExperienciaLaboral): Observable<any>{
    return this.http.post<any>(this.url+"create",experiencia)
  }

  public updateExperience(id:number, experiencia:ExperienciaLaboral):Observable<any>{
    return this.http.put<any>(this.url+`update/${id}`,experiencia)
  }

  public deleteExperience(id:number):Observable<any>{
    return this.http.delete<any>(this.url+`remove/${id}`)
  }


}
