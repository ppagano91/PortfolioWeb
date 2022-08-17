import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tecnologia } from 'src/app/model/tecnologia';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {
  private url:String="http://localhost:8080/tecnologia/"
  constructor(private http:HttpClient) {}
  getTecnologias():Observable<Tecnologia[]>{
    return this.http.get<Tecnologia[]>(this.url+"ver/tecnologias");
  }
}
