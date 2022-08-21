import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/model/experiencia-laboral';
import { ExperienciaLaboralService } from 'src/app/services/experiencia_laboral/experiencia-laboral.service';

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.css'],
})
export class NewJobComponent implements OnInit {
  public formData: ExperienciaLaboral={
    nombre: '',
    descripcion: '',
    fechaInicio: new Date(),
    fechaFin: new Date("YYYY-MM-DD"),
    esTrabajoActual: false,
    tipoEmpleo: '',
    empresa: '',
    tipoJornada: '',
  }

  constructor(
    private experienciaService: ExperienciaLaboralService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const nuevaExperiencia = this.formData;
    console.log('nuevaExperiencia\n', nuevaExperiencia);
    this.experienciaService.saveExperience(nuevaExperiencia).subscribe(
      data => {
        console.log('data\n', data);
        alert('Experiencia añadida');
        this.router.navigate(['']);
      },
      error => {
        alert('Ha ocurrido un error');
        this.router.navigate(['']);
      }
      // try {
      //   console.log('data\n', data);
      //   alert('Experiencia añadida');
      //   this.router.navigate(['']);
      // } catch (error) {
      //   alert('Ha ocurrido un error');
      //   this.router.navigate(['']);
      // }
      //  }
    );
  }
}
