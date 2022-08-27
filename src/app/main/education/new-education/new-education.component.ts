import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormacionAcademica } from 'src/app/model/formacion-academica';
import { FormacionAcademicaService } from 'src/app/services/formacion_academica/formacion-academica.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {
  public formData:FormacionAcademica={
    titulo:'',
    descripcion:'',
    institucion:'',
    fechaInicio:null,
    fechaFin:null,
    estado:'',
    link:'',
    image:'',
  }

  constructor(
    private educacionService: FormacionAcademicaService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const nuevaEducacion = this.formData;
    this.educacionService.saveEducation(nuevaEducacion).subscribe(
      data=>{
        alert('Educación añadida');
        window.location.reload(); 
      },
      error=>{
        alert('Ha ocurrido un error');
        this.router.navigate(['']);
      }
    )
  }

  closeAddEducationModal(){
    this.educacionService.$modalAddEducation.emit(false)
  }
}
