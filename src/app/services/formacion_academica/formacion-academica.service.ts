import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormacionAcademica } from 'src/app/model/formacion-academica';

@Injectable({
  providedIn: 'root'
})
export class FormacionAcademicaService {
  private url="http://localhost:8080/educacion/"

  constructor(private http: HttpClient ) {    
  }

  public getEducaciones(): Observable<FormacionAcademica[]>{
    return this.http.get<FormacionAcademica[]>(this.url+"ver/educaciones")
  }
}
