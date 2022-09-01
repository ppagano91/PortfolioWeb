import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormacionAcademica } from 'src/app/model/formacion-academica';

@Injectable({
  providedIn: 'root'
})
export class FormacionAcademicaService {
  private url="https://portfoliopaganopatricio.herokuapp.com/educacion/"
  $modalAddEducation = new EventEmitter<any>();
  $modalEditEducation = new EventEmitter<any>();

  constructor(private http: HttpClient ) {    
  }

  public getEducaciones(): Observable<FormacionAcademica[]>{
    return this.http.get<FormacionAcademica[]>(this.url+"ver/educaciones")
  }

  public listEducation(): Observable<FormacionAcademica[]>{
    return this.http.get<FormacionAcademica[]>(this.url+"get/formacionacademica")
  }

  public detailEducation(id:number):Observable<FormacionAcademica>{
    return this.http.get<FormacionAcademica>(this.url+`get/${id}`)
  }

  public saveEducation(educacion:FormacionAcademica):Observable<any>{
    return this.http.post<any>(this.url+"create",educacion)
  }

  public updateEducation(id:number, educacion:FormacionAcademica):Observable<any>{
    return this.http.put<any>(this.url+`update/${id}`,educacion)
  }

  public deleteEducation(id:number):Observable<any>{
    return this.http.delete<any>(this.url+`remove/${id}`)
  }
}
