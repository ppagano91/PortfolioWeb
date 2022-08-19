import { Component, OnInit } from '@angular/core';
import { ExperienciaLaboral } from 'src/app/model/experiencia-laboral';
import { ExperienciaLaboralService } from 'src/app/services/experiencia_laboral/experiencia-laboral.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  trabajos:ExperienciaLaboral[]=[];
  trabajo: ExperienciaLaboral = new ExperienciaLaboral("","",new Date, new Date,false,"");

  // Agregar TokenService cuando se haga
  constructor(private experienciaService: ExperienciaLaboralService) {}

  ngOnInit(): void {
    this.obtenerTodaExperiencaLaboral();
    // this.cargarExperiencia();
  }

  obtenerTodaExperiencaLaboral():void{
    this.experienciaService.getExperiencias().subscribe(data=>{
      data.forEach(element => {
        element.fechaInicio=new Date(element.fechaInicio);
        element.fechaFin=new Date(element.fechaFin);
      });      
      console.log("Fecha\n",data[0].fechaInicio.toLocaleString("es-ES", { month: "long" }));
      this.trabajos=data;
    })
  }

  cargarExperiencia():void{
    this.experienciaService.listExperience().subscribe(data=>this.trabajos=data)
  }

}