import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tecnologia } from 'src/app/model/tecnologia';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {
  private url:String="https://pp-portfolio-backend.herokuapp.com/tecnologia/"
  $modalAddSkill = new EventEmitter<any>();
  $modalEditSkill = new EventEmitter<any>();


  constructor(private http:HttpClient) {}
  getTecnologias():Observable<Tecnologia[]>{
    return this.http.get<Tecnologia[]>(this.url+"ver/tecnologias");
  }

  public listSkill(): Observable<Tecnologia[]>{
    return this.http.get<Tecnologia[]>(this.url+"get/tecnologias")
  }

  public detailSkill(id:number):Observable<Tecnologia>{
    return this.http.get<Tecnologia>(this.url+`get/${id}`)
  }

  public saveSkill(tecnologia:Tecnologia): Observable<any>{
    return this.http.post<any>(this.url+"create",tecnologia)
  }

  public updateSkill(id:number, tecnologia:Tecnologia):Observable<any>{
    return this.http.put<any>(this.url+`update/${id}`,tecnologia)
  }

  public deleteSkill(id:number):Observable<any>{
    return this.http.delete<any>(this.url+`remove/${id}`)
  }
}
