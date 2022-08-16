import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienciaLaboral } from 'src/app/model/experiencia-laboral';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaLaboralService {
  private url:String="http://localhost:8080/experiencia/";  
  constructor(private http: HttpClient) {    
  }

  public getExperiencias(): Observable<ExperienciaLaboral[]>{
    return this.http.get<ExperienciaLaboral[]>(this.url+"ver/trabajos")
  }


}
