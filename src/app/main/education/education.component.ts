import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormacionAcademica } from 'src/app/model/formacion-academica';
import { FormacionAcademicaService } from 'src/app/services/formacion_academica/formacion-academica.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educacion:FormacionAcademica = new FormacionAcademica("","",new Date(),new Date(),"","","");
  educaciones: FormacionAcademica[]=[];
  
  constructor(private educacionService: FormacionAcademicaService) { }

  ngOnInit(): void {
    this.obtenerTodaFormacionAcademica();
    // console.log("educaciones\n", this.educaciones);    
  }

  obtenerTodaFormacionAcademica():void{
    this.educacionService.getEducaciones().subscribe(data=>{
      console.log("educaciones\n",data)
      this.educaciones=data});
  }

}
