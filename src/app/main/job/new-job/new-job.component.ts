import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/model/experiencia-laboral';
import { ExperienciaLaboralService } from 'src/app/services/experiencia_laboral/experiencia-laboral.service';

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.css']
})
export class NewJobComponent implements OnInit {
  nombre:String="";
  descripcion:String="";
  fechaInicio:Date=new Date();
  fechaFin:Date=new Date();
  esTrabajoActual:boolean=false;
  tipoEmpleo:String="";
  empresa:String="";
  tipoJornada:String=""




  constructor(private experienciaService: ExperienciaLaboralService, private router: Router) {}

  ngOnInit(): void {
  }

  onCreate():void{
    const nuevaExperiencia = new ExperienciaLaboral(this.nombre,this.descripcion,this.fechaInicio,this.fechaFin,this.esTrabajoActual,this.tipoEmpleo,this.empresa,this.tipoJornada)
    this.experienciaService.saveExperience(nuevaExperiencia).subscribe(data=>{
      try {
        alert("Experiencia añadida");
        this.router.navigate(['']);        
      } catch (error) {
        alert("Ha ocurrido un error")        
        this.router.navigate(['']);
      }
      

  })
  }

}
