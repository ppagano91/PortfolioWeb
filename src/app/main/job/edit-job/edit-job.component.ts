import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/model/experiencia-laboral';
import { ExperienciaLaboralService } from 'src/app/services/experiencia_laboral/experiencia-laboral.service';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css'],
})
export class EditJobComponent implements OnInit {
  public formData: ExperienciaLaboral = {
    nombre: '',
    descripcion: '',
    fechaInicio: null,
    fechaFin: null,
    esTrabajoActual: false,
    tipoEmpleo: '',
    empresa: '',
    tipoJornada: '',
  };

  constructor(
    private experienciaService: ExperienciaLaboralService,
    private activatedRouter: ActivatedRoute,
    private router: Router

  ) {}

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.experienciaService.detailExperience(id).subscribe(
      data=>{
        this.formData=data
                
      },error=>{
        alert("Error al modificar experiencia en ngOnInit");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const id= this.activatedRouter.snapshot.params['id'];
    this.experienciaService.updateExperience(id, this.formData).subscribe(
      data=>{
        this.router.navigate(['']);
      },error=>{
        alert("Error al modificar experiencia en onUpdate");
        this.router.navigate(['']);
      }
    )
  }
}
