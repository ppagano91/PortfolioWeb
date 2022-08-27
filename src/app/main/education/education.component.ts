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
  educacion:FormacionAcademica = new FormacionAcademica("","","",new Date,new Date,"","","");
  educaciones: FormacionAcademica[]=[];
  public logo_universidad:String="./../../../assets/images/logo_universidad2.png"
  public isLogged: boolean=false
  
  modalAddEducationSwitch: boolean;
  modalEditEducationSwitch: boolean;

  constructor(private educacionService: FormacionAcademicaService) { }

  ngOnInit(): void {
    this.getEducation();
    this.isLogged=(localStorage.getItem("isLogged")=="true")
    // this.obtenerTodaFormacionAcademica();    
    this.educacionService.$modalAddEducation.subscribe(
      (data) => (this.modalAddEducationSwitch = data)
    );

    this.educacionService.$modalEditEducation.subscribe(
      (data) => (this.modalEditEducationSwitch = data)
    );
  }

  openAddEducationModal() {
    this.modalAddEducationSwitch = true;
  }

  openEditEducationModal() {
    this.modalEditEducationSwitch = true;
  }

  obtenerTodaFormacionAcademica():void{
    this.educacionService.getEducaciones().subscribe(data=>{      
      data.forEach(element => {
        element.fechaInicio=new Date(element.fechaInicio);
        element.fechaFin=null;
      });
      this.educaciones=data});
  }

  getEducation():void{
    this.educacionService.listEducation().subscribe(
      data=>{
        data.forEach(
          element=>{
            element.fechaInicio=new Date(element.fechaInicio);
            element.fechaFin=new Date(element.fechaFin);
          }
        );
        this.educaciones=data;
      }
    )
  }

  onRemove(id?:number){
    if(id!=undefined){
      this.educacionService.deleteEducation(id).subscribe(
        data=>{
          this.getEducation();
        },error=>{
          alert("No se pudo borrar la educación")
        }
      )
    }
  }

}
