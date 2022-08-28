import { Component, OnInit } from '@angular/core';
import { ExperienciaLaboral } from 'src/app/model/experiencia-laboral';
import { ExperienciaLaboralService } from 'src/app/services/experiencia_laboral/experiencia-laboral.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
})
export class JobComponent implements OnInit {
  trabajos: ExperienciaLaboral[] = [];
  trabajo: ExperienciaLaboral = new ExperienciaLaboral(
    '',
    '',
    new Date(),
    new Date(),
    false,
    '',
    '',
    ''
  );
  public isLogged: boolean = false;

  modalAddJobSwitch: boolean;
  modalEditJobSwitch: boolean;
  public id:number=null;

  // Agregar TokenService cuando se haga
  constructor(private experienciaService: ExperienciaLaboralService) {}

  ngOnInit(): void {
    this.obtenerTodaExperiencaLaboral();
    this.isLogged = localStorage.getItem('isLogged') == 'true';
    // this.cargarExperiencia();
    this.experienciaService.$modalAddJob.subscribe(
      (data) => (this.modalAddJobSwitch = data)
    );

    this.experienciaService.$modalEditJob.subscribe(
      (data) => (this.modalEditJobSwitch = data)
    );
  }

  openAddJobModal() {
    this.modalAddJobSwitch = true;
  }

  openEditJobModal(id:number) {
    this.id=id;
    console.log("openEditJobModal");
    this.modalEditJobSwitch = true;
  }

  obtenerTodaExperiencaLaboral(): void {
    this.experienciaService.getExperiencias().subscribe((data) => {
      data.forEach((element) => {
        element.fechaInicio = new Date(element.fechaInicio);
        element.fechaFin = new Date(element.fechaFin);
      });
      // console.log("Fecha\n",data[0].fechaInicio.toLocaleString("es-ES", { month: "long" }));
      this.trabajos = data;
    });
  }

  cargarExperiencia(): void {
    this.experienciaService
      .listExperience()
      .subscribe((data) => (this.trabajos = data));
  }

  onRemove(id?: number) {
    if (id != undefined) {
      this.experienciaService.deleteExperience(id).subscribe(
        (data) => {
          this.obtenerTodaExperiencaLaboral();
        },
        (err) => {
          alert('No se pudo borrar la experiencia');
        }
      );
    }
  }
}
